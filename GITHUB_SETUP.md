# 📦 GitHub Setup Guide

## 🚀 Git Commands untuk Push ke GitHub

### 1. Initialize Git Repository (jika belum ada)
```bash
git init
git branch -M main
```

### 2. Add All Files
```bash
git add .
```

### 3. Commit dengan Message
```bash
git commit -m "feat: Complete TDP Payroll System with Landing Page and Form Integration

- Landing page dengan logo TDP dan jadwal pembayaran
- Form registrasi 7 seksi dengan validasi lengkap  
- Google Sheets dan WhatsApp integration
- Mobile responsive design
- Vercel serverless functions ready
- Production environment configuration
- Complete deployment guides"
```

### 4. Add Remote Repository
Ganti `USERNAME` dan `REPOSITORY-NAME` dengan nama repository Anda:
```bash
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
```

### 5. Push ke GitHub
```bash
git push -u origin main
```

## 📋 Pre-Push Checklist

### ✅ Files Ready
- [x] Landing page dengan TDP branding
- [x] Form registrasi multi-step
- [x] Google integrations working
- [x] Mobile responsive design
- [x] Vercel configuration (vercel.json)
- [x] Serverless entry point (api/index.js)
- [x] Environment templates
- [x] Comprehensive documentation

### ✅ Configuration Files
- [x] `.gitignore` - Exclude sensitive files
- [x] `.env.example` - Development template
- [x] `README.md` - Project documentation
- [x] `package.json` - Dependencies
- [x] `vercel.json` - Deployment config

### ✅ Documentation
- [x] `DEPLOYMENT_CHECKLIST.md`
- [x] `ENV_SETUP_GUIDE.md`
- [x] `PRODUCTION_ENV.txt`
- [x] `GITHUB_SETUP.md`

## 🌐 Vercel Import Steps

### 1. Buat GitHub Repository
1. Login ke [github.com](https://github.com)
2. Click "New repository"
3. Nama: `tdp-payroll-system` (atau sesuai keinginan)
4. Description: "Indonesian Payroll Registration System for Daily Workers"
5. Public/Private: Pilih sesuai kebutuhan
6. **JANGAN** initialize dengan README (sudah ada)
7. Click "Create repository"

### 2. Connect Local ke GitHub
Copy command dari GitHub page:
```bash
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
git branch -M main
git push -u origin main
```

### 3. Import ke Vercel
1. Login ke [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import dari GitHub
4. Select repository yang baru dibuat
5. Configure:
   - Framework: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## 🔐 Environment Variables Setup

### Required untuk Vercel:
Copy dari `PRODUCTION_ENV.txt`:

```
DATABASE_URL=postgresql://production_connection_string
GOOGLE_CREDENTIALS_JSON={"type":"service_account"...}
GOOGLE_SPREADSHEET_ID=1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY
GOOGLE_DRIVE_FOLDER_ID=1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ
NODE_ENV=production
VERCEL=1
```

### Set di Vercel Dashboard:
1. Project Settings → Environment Variables
2. Add each variable
3. Environment: ✓ Production ✓ Preview ✓ Development

## 🗄️ Database Production

### Option 1: Neon (Recommended)
```bash
# 1. Create account at neon.tech
# 2. New Project: "TDP Payroll System"
# 3. Copy connection string
# 4. Update DATABASE_URL in Vercel
```

### Option 2: Supabase
```bash
# 1. Create account at supabase.com
# 2. New Project with PostgreSQL
# 3. Settings → Database → Connection string
# 4. Update DATABASE_URL in Vercel
```

## 🧪 Testing Deployment

### 1. Build Test Local
```bash
npm run build
npm start
```

### 2. After Deployment
- Health check: `https://your-app.vercel.app/api/health`
- Landing page: `https://your-app.vercel.app/`
- Form: `https://your-app.vercel.app/form`

## 🔄 Update Workflow

### Future Updates:
```bash
git add .
git commit -m "update: description of changes"
git push
```

Vercel akan auto-deploy setiap push ke main branch.

## 🆘 Troubleshooting

### Push Failed?
```bash
git pull origin main --rebase
git push
```

### Build Failed di Vercel?
1. Check build logs di Vercel Dashboard
2. Test `npm run build` locally
3. Verify environment variables

### Deployment Error?
1. Check Function Logs di Vercel
2. Test health endpoint
3. Verify database connection

---

**🎯 Setelah push ke GitHub, import ke Vercel dengan environment variables untuk deployment lengkap!**