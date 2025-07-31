import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import path from "path";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { 
  uploadFileToGoogleDrive, 
  addRegistrationToSpreadsheet, 
  initializeSpreadsheetHeaders,
  type RegistrationData 
} from "./google-integration";

// Configure multer for file uploads (memory storage for Google Drive)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize Google Spreadsheet headers
  try {
    await initializeSpreadsheetHeaders();
  } catch (error) {
    console.warn('Warning: Could not initialize Google Spreadsheet headers:', error);
  }

  // Submit registration form
  app.post('/api/registrations', upload.fields([
    { name: 'ktpPhoto', maxCount: 1 },
    { name: 'kkPhoto', maxCount: 1 },
    { name: 'bankPhoto', maxCount: 1 },
    { name: 'selfiePhoto', maxCount: 1 },
    { name: 'npwpPhoto', maxCount: 1 }
  ]), async (req, res) => {
    try {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      
      // Validate required files
      const requiredFiles = ['ktpPhoto', 'kkPhoto', 'bankPhoto', 'selfiePhoto'];
      for (const fileField of requiredFiles) {
        if (!files[fileField] || files[fileField].length === 0) {
          return res.status(400).json({ 
            message: `File ${fileField} wajib diupload` 
          });
        }
      }

      // Upload files to Google Drive and get links
      const fileLinks: { [key: string]: string } = {};
      const timestamp = Date.now();
      
      // Upload required files to Google Drive
      for (const fileField of requiredFiles) {
        const file = files[fileField][0];
        const fileName = `${req.body.opsId || req.body.fullName}_${fileField}_${timestamp}.${file.originalname.split('.').pop()}`;
        
        try {
          const driveLink = await uploadFileToGoogleDrive(file, fileName);
          fileLinks[fileField] = driveLink;
          console.log(`✅ ${fileField} uploaded to Google Drive:`, driveLink);
        } catch (error) {
          console.error(`❌ Failed to upload ${fileField}:`, error);
          return res.status(500).json({ 
            message: `Gagal mengupload file ${fileField} ke Google Drive` 
          });
        }
      }

      // Handle optional NPWP photo
      console.log('Checking NPWP photo...', files.npwpPhoto ? 'Found' : 'Not found');
      if (files.npwpPhoto && files.npwpPhoto.length > 0) {
        const npwpFile = files.npwpPhoto[0];
        const fileName = `${req.body.opsId || req.body.fullName}_npwpPhoto_${timestamp}.${npwpFile.originalname.split('.').pop()}`;
        
        try {
          const driveLink = await uploadFileToGoogleDrive(npwpFile, fileName);
          fileLinks.npwpPhoto = driveLink;
          console.log('✅ NPWP photo uploaded to Google Drive:', driveLink);
        } catch (error) {
          console.error('❌ Failed to upload NPWP photo:', error);
          // NPWP is optional, so continue without it
        }
      } else {
        console.log('⚠️ No NPWP photo uploaded (optional)');
      }

      console.log('File processing completed:', fileLinks);

      // Prepare registration data for database
      const registrationData = {
        ...req.body,
        age: parseInt(req.body.age),
        entryYear: parseInt(req.body.entryYear),
        graduationYear: parseInt(req.body.graduationYear),
        ktpPhoto: fileLinks.ktpPhoto,
        kkPhoto: fileLinks.kkPhoto,
        bankPhoto: fileLinks.bankPhoto,
        selfiePhoto: fileLinks.selfiePhoto,
        npwpPhoto: fileLinks.npwpPhoto || null,
      };

      // Validate with Zod schema
      const validatedData = insertRegistrationSchema.parse(registrationData);

      // Save to database
      const registration = await storage.createRegistration(validatedData);

      // Add to Google Spreadsheet
      try {
        await addRegistrationToSpreadsheet(
          registrationData as RegistrationData, 
          fileLinks
        );
        console.log('Data added to Google Spreadsheet successfully');
      } catch (spreadsheetError) {
        console.error('Error adding to Google Spreadsheet:', spreadsheetError);
        // Don't fail the request if spreadsheet fails, data is already saved to database
      }
      
      res.status(201).json({ 
        id: registration.id,
        message: 'Registrasi berhasil disimpan dan dikirim ke Google Sheets' 
      });
    } catch (error: any) {
      console.error('Registration error:', error);
      
      if (error.issues) {
        // Zod validation error
        return res.status(400).json({ 
          message: 'Data tidak valid',
          errors: error.issues.map((issue: any) => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        });
      }
      
      res.status(500).json({ 
        message: error.message || 'Terjadi kesalahan server' 
      });
    }
  });

  // Get registration by ID
  app.get('/api/registrations/:id', async (req, res) => {
    try {
      const registration = await storage.getRegistration(req.params.id);
      if (!registration) {
        return res.status(404).json({ message: 'Registrasi tidak ditemukan' });
      }
      res.json(registration);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
