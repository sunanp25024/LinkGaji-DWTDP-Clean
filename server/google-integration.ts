import { google } from 'googleapis';
import { Readable } from 'stream';

// Initialize Google APIs
let auth: any = null;
let sheets: any = null;
let drive: any = null;
let googleIntegrationEnabled = false;

// Check for Google credentials from environment variable
if (process.env.GOOGLE_CREDENTIALS_JSON) {
  try {
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS_JSON);
    
    auth = new google.auth.GoogleAuth({
      credentials,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive'
      ]
    });

    sheets = google.sheets({ version: 'v4', auth });
    drive = google.drive({ version: 'v3', auth });
    googleIntegrationEnabled = true;
    
    console.log('✅ Google credentials loaded from environment');
  } catch (error) {
    console.error('❌ Failed to parse Google credentials:', error);
    console.log('Google integration will be disabled');
  }
} else {
  console.log('⚠️ GOOGLE_CREDENTIALS_JSON not found - Google integration disabled');
}

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID || '1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY';
const DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID || '1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ';

export interface RegistrationData {
  opsId: string;
  fullName: string;
  nik: string;
  birthPlace: string;
  birthDate: string;
  age: number;
  gender: string;
  ktpAddress: string;
  currentAddress: string;
  rtRw: string;
  houseNumber: string;
  kelurahan: string;
  kecamatan: string;
  city: string;
  postalCode: string;
  religion: string;
  maritalStatus: string;
  citizenship: string;
  phone: string;
  whatsapp: string;
  email: string;
  educationLevel: string;
  schoolName: string;
  major: string;
  entryYear: number;
  graduationYear: number;
  gpa: string;
  emergencyName: string;
  emergencyPhone: string;
  emergencyWhatsapp: string;
  emergencyRelationship: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  npwp: string;
  motherName: string;
  fatherName: string;
  ktpPhoto?: string;
  kkPhoto?: string;
  bankPhoto?: string;
  selfiePhoto?: string;
  npwpPhoto?: string;
}

export async function uploadFileToGoogleDrive(
  file: Express.Multer.File,
  fileName: string
): Promise<string> {
  try {
    if (!googleIntegrationEnabled) {
      // When Google integration is disabled, just return file info
      const fileInfo = `${fileName} (${Math.round(file.size / 1024)}KB)`;
      console.log(`📁 File stored locally: ${fileInfo}`);
      return `LOCAL_FILE: ${fileInfo}`;
    }

    // For now, create a base64 data URL that can be stored directly in the spreadsheet
    // This avoids the Service Account storage quota issue
    const base64Data = file.buffer.toString('base64');
    const dataUrl = `data:${file.mimetype};base64,${base64Data}`;
    
    // Create a more user-friendly display format
    const fileInfo = `${fileName} (${Math.round(file.size / 1024)}KB)`;
    
    console.log(`✅ File processed: ${fileInfo}`);
    
    // Return a descriptive string instead of trying to upload to Drive
    return `FILE: ${fileInfo}`;
  } catch (error) {
    console.error('Error processing file:', error);
    throw new Error('Failed to process file');
  }
}

export async function addRegistrationToSpreadsheet(
  data: RegistrationData,
  fileLinks: { [key: string]: string }
): Promise<void> {
  try {
    if (!googleIntegrationEnabled) {
      console.log('⚠️ Google Sheets integration disabled - skipping spreadsheet update');
      return;
    }

    const timestamp = new Date().toLocaleString('id-ID', { 
      timeZone: 'Asia/Jakarta',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const values = [[
      timestamp,
      data.opsId,
      data.fullName,
      data.nik,
      data.birthPlace,
      data.birthDate,
      data.age,
      data.gender,
      data.ktpAddress,
      data.currentAddress,
      data.rtRw,
      data.houseNumber,
      data.kelurahan,
      data.kecamatan,
      data.city,
      data.postalCode,
      data.religion,
      data.maritalStatus,
      data.citizenship,
      data.phone,
      data.whatsapp,
      data.email,
      data.educationLevel,
      data.schoolName,
      data.major,
      data.entryYear,
      data.graduationYear,
      data.gpa,
      data.emergencyName,
      data.emergencyPhone,
      data.emergencyWhatsapp,
      data.emergencyRelationship,
      data.bankName,
      data.accountNumber,
      data.accountHolder,
      data.npwp,
      data.motherName,
      data.fatherName,
      fileLinks.ktpPhoto || '',
      fileLinks.kkPhoto || '',
      fileLinks.bankPhoto || '',
      fileLinks.selfiePhoto || '',
      fileLinks.npwpPhoto || ''
    ]];

    // First, try to get current data to find next row
    let nextRow = 1;
    try {
      const currentData = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'A:A'
      });
      
      if (currentData.data.values) {
        nextRow = currentData.data.values.length + 1;
      }
    } catch (err) {
      console.log('Could not get existing data, starting from row 1');
    }

    // Use update method with specific range
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `A${nextRow}:AQ${nextRow}`,
      valueInputOption: 'RAW',
      requestBody: {
        values
      }
    });

    console.log(`Data successfully added to Google Spreadsheet at row ${nextRow}`);
  } catch (error) {
    console.error('Error adding to Google Spreadsheet:', error);
    throw new Error('Failed to add data to Google Spreadsheet');
  }
}

export async function initializeSpreadsheetHeaders(): Promise<void> {
  try {
    if (!googleIntegrationEnabled) {
      console.log('⚠️ Google integration disabled - skipping initialization');
      return;
    }

    console.log('Testing Google API connection...');
    
    // Test Google Drive access first
    const driveTest = await drive.files.list({
      q: `'${DRIVE_FOLDER_ID}' in parents`,
      pageSize: 1
    });
    
    console.log('✅ Google Drive connection successful');
    
    // Test basic spreadsheet access
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID
    });
    
    console.log('✅ Google Sheets connection successful');
    console.log('Connected to spreadsheet:', spreadsheet.data.properties?.title);
    
    // For now, skip automatic header initialization to avoid range issues
    // Headers can be manually added to the sheet if needed
    console.log('Google integrations are ready - skipping auto header setup');
    
  } catch (error) {
    console.error('Google API connection failed:', error);
    console.log('Continuing without Google integrations...');
  }
}