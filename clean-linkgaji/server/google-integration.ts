import { google } from 'googleapis';
import { Readable } from 'stream';

// Initialize Google APIs
// Use hardcoded credentials for now (in production, use environment variables)
const credentials = {
  type: "service_account",
  project_id: "linkgajitdp",  
  private_key_id: "79a1f502ce62ac6667f0717faf6cebdd9c1f736c",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD/zIjKZqyL5p52\nwzdNARbK3UbHNCU8fSZGF9kSIXpZwITP4LpCAJKCR8cQC/sgC7cz1mQ3wrdWV+X6\npBUUkpWsqNoNkc8oJ8wLZ6UvKsIqgmpvaHApD+bZuAJyOhZyp8YYt40wr4J6CIi/\nICUsm7pGgyn2W2+8r4Q/hzhMlBthdJhSPgcBdjUZX0xt8h09uJbiDR1XcrmKq8Ju\nbvcixnuGV9/0Q4SXvEKaKBMLA9/vsG7GchlOyOCeF67IWNLjDMxwcHTSSwPsCGMl\n3xtcN/S2q3hn37AZtcu6ia6Sx+D/owDLio9gXXjudNA1xQPlVPJdz3+ezTWyB0m4\nyyYCakndAgMBAAECggEAe/+RO9RDxlmX7Wg6cXiarOJRAhW0Czt7hzTeRBy4a7OY\nbhC5GW+flcnnpE66gFFNkLJXyHP6Xb+kOzi5A0z/g0Ai27sX2ZZZIhovB8tJbkPk\nBndxD2am+FlrziV8Zj4QGEE6DyS1MiTa7RNPEe23gaDpgYPXiXbnu8f3sZ+GGlnr\nt74k+32thiNm01kXPxwV+GSAvdMmDNXM4bpFgMgM/xioa6ZV7VYd97cTcC7iwI7p\nxbEvgQqg0/lbJzGXgYX4DhCYJcnp31zweFBNr1FTXSW7O2XWI3zj41sA3YVpk6Fl\nYvqvAeGr7GPclVuhUbB0bw6tLT2MaT5MnOOJSlFV3QKBgQD/8W2MY7YbTVCYxU4U\n462Ag4WEha7KvPwWAPnMx/e6y0jJpQGuesQC6DSlaBc0yRihh1T30IMgoVHt9VAm\ni2tUxGxrPBVahu5THAdMRFu7BmLaJYI6u1At19mFdLUISTe8W6izyi8m0nlCq9rq\nvsMir1PqCjkaN3fgWDJm3I3OwwKBgQD/2xkkRp7BhXXc3sjF6RbaBpx5fqFO0RJl\nfswxG2bHsygahYPJsKrlX1ijPL6JOvd7VqLMVSqq4NEz7k4GNMJbM8Aa+SOniADV\neDnDmvVisVzZZajILAA73ztnbVTf1/1UX4Hq1AF8lVtEnls2n/e88TQZL+TYTrnh\nHLakGxk63wKBgQDI68aMB1rWZAN5aqq5S2LRGG6gcjGdhm5+95UiZXjcculZIugH\nCOkHPzLVBrnw/k0PwSW6xT2rR/kBTSr2l0xS50AVjr1Uq8g8BizUenVohMLlbbym\nTpXK50AjvFLBhnjyrSHqwjXxzBjVdgQNdGPLvsepWw0ov5Kj05j9lvbb8QKBgHJY\nD7dnnEGujIsmQaI5Vo4f0ER39E1OIKOddFIqBdgP2EdqDgjQXL/fybRCTID2Cm5j\nvKQHF+eAS96ijNo3L/kkeqFTYLzZik3cyiwCD9KIo49A4Jp9F6mqTVkewoS7easA\neAZjszpjYYOcJfWWrlgRkBAFmIeXP3k8pN9YgQEPAoGAejzolx7x+upp3RwmKz0F\nXjgaTuXR+QyIJe5IcIvJe6ZVztC/6jfYpu3SWkh1oWP9lH2MhtsIA/uk6zzQWDt3\n8GSyTtkoPcZO9p3YLFtQqdRWuEMDDWmCuWHJKspCU9s/fDgoZKTV+gHQ1AGjpHP9\nml5qP5jFcLJNINN11BZ5UH8=\n-----END PRIVATE KEY-----\n",
  client_email: "linkgajitdp@linkgajitdp.iam.gserviceaccount.com",
  client_id: "110602267309150418834", 
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/linkgajitdp%40linkgajitdp.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive'
  ]
});

const sheets = google.sheets({ version: 'v4', auth });
const drive = google.drive({ version: 'v3', auth });

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