const express = require('express');
const path = require('path');

// Create Express app
const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Environment check
if (!process.env.DATABASE_URL) {
  console.error('Missing DATABASE_URL environment variable');
}

if (!process.env.GOOGLE_CREDENTIALS_JSON) {
  console.error('Missing GOOGLE_CREDENTIALS_JSON environment variable');
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    env: {
      NODE_ENV: process.env.NODE_ENV,
      DATABASE_URL: process.env.DATABASE_URL ? 'configured' : 'missing',
      GOOGLE_CREDENTIALS_JSON: process.env.GOOGLE_CREDENTIALS_JSON ? 'configured' : 'missing'
    }
  });
});

// Try to load the built application
try {
  const builtApp = require('../dist/index.js');
  if (builtApp && builtApp.default) {
    // Export the built app
    module.exports = builtApp.default;
  } else if (builtApp) {
    module.exports = builtApp;
  } else {
    throw new Error('Built app not found or invalid');
  }
} catch (error) {
  console.error('Failed to load built application:', error);
  
  // Fallback: serve basic landing page
  app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>TDP Payroll System</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
            .error { background: #fee; border: 1px solid #fcc; padding: 20px; border-radius: 5px; }
            .info { background: #eef; border: 1px solid #ccf; padding: 20px; border-radius: 5px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <h1>TDP Payroll System</h1>
          <div class="error">
            <h2>Server Error</h2>
            <p>The application failed to initialize. Please check:</p>
            <ul>
              <li>Environment variables are properly configured</li>
              <li>Build process completed successfully</li>
              <li>Database connection is available</li>
            </ul>
            <p><strong>Error:</strong> ${error.message}</p>
          </div>
          <div class="info">
            <h3>Debug Information</h3>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'not set'}</p>
            <p><strong>Database URL:</strong> ${process.env.DATABASE_URL ? 'configured' : 'missing'}</p>
            <p><strong>Google Credentials:</strong> ${process.env.GOOGLE_CREDENTIALS_JSON ? 'configured' : 'missing'}</p>
          </div>
        </body>
      </html>
    `);
  });
  
  // Fallback error handler
  app.use((req, res) => {
    res.status(500).json({
      error: 'Application initialization failed',
      message: error.message,
      path: req.path,
      timestamp: new Date().toISOString()
    });
  });
  
  module.exports = app;
}