# 🚀 Panduan Deploy ke Vercel - Langkah Demi Langkah

## 📋 Persiapan Sebelum Deploy

### ✅ Yang Harus Sudah Ada:
- [x] Repository GitHub sudah dibuat dan ter-push
- [x] File `vercel.json` sudah ada
- [x] File `.env.example` untuk reference
- [x] Build script di `package.json` sudah configured

## 🌐 Langkah 1: Setup Vercel Account

1. **Buka [vercel.com](https://vercel.com)**
2. **Klik "Sign Up"** atau **"Continue with GitHub"**
3. **Login dengan GitHub** account Anda
4. **Authorize Vercel** untuk akses repository

## 📦 Langkah 2: Import Project

1. **Dashboard Vercel** → Klik **"New Project"**
2. **Import Git Repository** → Pilih repository `tdp-payroll-system`
3. **Configure Project**:
   - **Project Name**: `tdp-payroll-system` (atau sesuai keinginan)
   - **Framework Preset**: Vercel akan detect otomatis
   - **Root Directory**: `.` (default)
   - **Build Command**: `npm run build` (sudah ada di package.json)
   - **Output Directory**: `dist` (sudah configured)

## 🔧 Langkah 3: Setup Environment Variables

**PENTING!** Set environment variables sebelum deploy:

### A. Klik **"Environment Variables"** di Vercel

### B. Tambahkan Variables Berikut:

#### Database Configuration:
```
DATABASE_URL = postgresql://your_database_url_here
```

#### Google API Configuration:
```
GOOGLE_SPREADSHEET_ID = 1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY

GOOGLE_DRIVE_FOLDER_ID = 1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ

GOOGLE_CREDENTIALS_JSON = {"type": "service_account", "project_id": "linkgajitdp", "private_key_id": "79a1f502ce62ac...", "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n", "client_email": "...", "client_id": "...", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "..."}
```

#### Server Configuration:
```
NODE_ENV = production
PORT = 5000
```

### C. Set Environment untuk **Production**, **Preview**, dan **Development**

## 🗄️ Langkah 4: Setup Database Production

### Option 1: Neon Database (Recommended)
1. **Buka [neon.tech](https://neon.tech)**
2. **Create New Project** → Nama: `TDP Payroll DB`
3. **Copy Connection String**
4. **Update DATABASE_URL** di Vercel Environment Variables

### Option 2: Supabase
1. **Buka [supabase.com](https://supabase.com)**
2. **New Project** → Setup PostgreSQL
3. **Copy connection string** dari Settings → Database
4. **Update DATABASE_URL** di Vercel

### Option 3: Railway
1. **Buka [railway.app](https://railway.app)**
2. **New Project** → Add PostgreSQL
3. **Copy DATABASE_URL** dari Variables tab

## 🔑 Langkah 5: Setup Google API Production

### A. Service Account Credentials
Gunakan credentials yang sama dari development atau buat baru:

1. **Google Cloud Console** → IAM & Admin → Service Accounts
2. **Create Service Account** atau gunakan yang existing
3. **Generate Key** → Download JSON
4. **Copy semua isi JSON** ke `GOOGLE_CREDENTIALS_JSON`

### B. Share Google Sheets
1. **Buka Google Sheets** dengan ID: `1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY`
2. **Klik Share** → Add email service account
3. **Give Editor permission**

## 🚀 Langkah 6: Deploy!

1. **Vercel Dashboard** → Klik **"Deploy"**
2. **Wait for build process** (~2-5 menit)
3. **Check build logs** jika ada error
4. **Success!** → Aplikasi akan available di `https://your-app.vercel.app`

## ✅ Langkah 7: Test Production

### A. Test Landing Page
- Buka `https://your-app.vercel.app`
- Check logo TDP muncul
- Check jadwal pembayaran tampil benar

### B. Test Registration Form
- Klik "Mulai Registrasi"
- Fill form lengkap
- Upload files (KTP, KK, Bank, Selfie)
- Submit form
- Check data masuk ke Google Sheets

### C. Test WhatsApp Integration
- Form berhasil submit
- Check WhatsApp message terkirim ke admin
- Data auto-fill working

## 🔍 Troubleshooting

### Build Failed?
**Check logs di Vercel Dashboard:**
- Missing environment variables
- Build script error
- Dependencies issue

### Database Connection Error?
```
DATABASE_URL format salah atau database tidak accessible
```
**Solution**: Check connection string dan database status

### Google API Error?
```
403 Forbidden atau Authentication failed
```
**Solution**: 
- Check GOOGLE_CREDENTIALS_JSON format
- Verify service account permissions
- Check Google Sheets sharing

### File Upload Not Working?
**Vercel memiliki batasan file upload**
- Max 4.5MB per file
- Temporary storage only
- Consider use Cloudinary/AWS S3 untuk production

## 📱 Custom Domain (Opsional)

1. **Vercel Dashboard** → **Settings** → **Domains**
2. **Add Domain** → masukkan domain Anda
3. **Configure DNS** sesuai instruksi Vercel
4. **SSL Certificate** otomatis ter-setup

## 🎉 Selesai!

**✅ Aplikasi Production Ready:**
- Landing page dengan branding TDP
- Form registrasi 3 halaman
- Google Sheets integration
- WhatsApp confirmation
- Mobile responsive
- HTTPS security
- Auto scaling

**🔗 Share URL:** `https://your-app.vercel.app`

---

## 📞 Butuh Bantuan?

Jika ada error atau masalah:
1. **Check Vercel build logs**
2. **Check environment variables**
3. **Test database connection**
4. **Verify Google API credentials**

**Good luck! 🚀**