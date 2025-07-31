# 🚀 Deployment Checklist - GitHub & Vercel

## ✅ Pre-Deployment Checklist

### Files Ready
- [x] Landing page dengan logo TDP dan jadwal pembayaran
- [x] Form registrasi 7 seksi dengan validasi
- [x] Google Sheets integration working
- [x] WhatsApp integration configured
- [x] File upload system dengan preview
- [x] Mobile responsive design
- [x] PostgreSQL database schema
- [x] Error handling dan validation

### Configuration Files
- [x] `vercel.json` - Vercel deployment configuration
- [x] `api/index.js` - Serverless function entry point
- [x] `.gitignore` - Exclude sensitive files
- [x] `package.json` - Dependencies dan build scripts
- [x] `README.md` - Project documentation
- [x] `PRODUCTION_ENV.txt` - Environment variables template
- [x] `ENV_SETUP_GUIDE.md` - Step-by-step setup guide

### Environment Files
- [x] `.env.example` - Development template
- [x] `PRODUCTION_ENV.txt` - Production variables
- [x] Google Service Account credentials included
- [x] Database schema documented

## 📦 GitHub Push Steps

### 1. Initialize Git (if needed)
```bash
git init
```

### 2. Add All Files
```bash
git add .
```

### 3. Commit Changes
```bash
git commit -m "Initial commit: TDP Payroll System with Landing Page, Form, and Integrations"
```

### 4. Add Remote Repository
```bash
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
```

### 5. Push to GitHub
```bash
git push -u origin main
```

## 🌐 Vercel Deployment Steps

### 1. Import Project
1. Login to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub repository
4. Select your repository

### 2. Configure Project
- **Framework Preset**: Detected automatically
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Environment Variables

**Required Variables:**
```
DATABASE_URL = postgresql://your_production_db_url
GOOGLE_CREDENTIALS_JSON = {"type":"service_account","project_id":"linkgajitdp"...}
GOOGLE_SPREADSHEET_ID = 1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY
GOOGLE_DRIVE_FOLDER_ID = 1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ
NODE_ENV = production
VERCEL = 1
```

**Set for all environments:**
- ✅ Production
- ✅ Preview  
- ✅ Development

### 4. Database Setup

**Option 1: Neon (Recommended)**
1. Create account at [neon.tech](https://neon.tech)
2. New Project: "TDP Payroll System"
3. Copy connection string
4. Update `DATABASE_URL` in Vercel

**Option 2: Supabase**
1. Create account at [supabase.com](https://supabase.com)
2. New Project with PostgreSQL
3. Get connection string from Settings → Database
4. Update `DATABASE_URL` in Vercel

**Option 3: Railway**
1. Create account at [railway.app](https://railway.app)
2. New Project → Add PostgreSQL
3. Copy `DATABASE_URL` from Variables
4. Update in Vercel

### 5. Google Sheets Permission
1. Open spreadsheet: `1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY`
2. Click "Share"
3. Add email: `linkgajitdp@linkgajitdp.iam.gserviceaccount.com`
4. Give "Editor" permission

### 6. Deploy
Click "Deploy" button in Vercel

## 🧪 Testing After Deployment

### 1. Health Check
Visit: `https://your-app.vercel.app/api/health`

**Expected Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-01-30T...",
  "env": {
    "NODE_ENV": "production",
    "DATABASE_URL": "configured",
    "GOOGLE_CREDENTIALS_JSON": "configured"
  }
}
```

### 2. Landing Page Test
- ✅ Logo TDP displayed
- ✅ Payment schedule information
- ✅ Requirements section
- ✅ "Mulai Registrasi" button works
- ✅ Mobile responsive

### 3. Form Test
- ✅ All 7 form sections accessible
- ✅ File upload working
- ✅ Form validation working
- ✅ Data submission to Google Sheets
- ✅ WhatsApp confirmation sent

### 4. Integration Test
- ✅ Google Sheets data appears correctly
- ✅ File uploads saved to Google Drive
- ✅ WhatsApp message sent to admin
- ✅ Database records created

## 🚨 Troubleshooting

### Build Failed
- Check build logs in Vercel Dashboard
- Verify all dependencies in package.json
- Test `npm run build` locally

### Function Error
- Check Vercel Function Logs
- Verify environment variables format
- Test health endpoint for debug info

### Database Connection Error
- Verify DATABASE_URL format
- Check database accessibility from external IP
- Test connection from database provider dashboard

### Google API Error
- Verify GOOGLE_CREDENTIALS_JSON is single line
- Check service account permissions
- Confirm spreadsheet sharing settings

## ✅ Success Criteria

**Deployment Successful When:**
- ✅ Application loads without errors
- ✅ Landing page displays correctly
- ✅ Form submission works end-to-end
- ✅ Data appears in Google Sheets
- ✅ WhatsApp confirmation received
- ✅ All file uploads functional
- ✅ Mobile experience optimized

## 📞 Support

If issues persist:
1. Check Vercel Function Logs
2. Verify all environment variables
3. Test database connection
4. Confirm Google API permissions
5. Review deployment guides in project files

---

**🎯 Your TDP Payroll System is ready for production deployment!**