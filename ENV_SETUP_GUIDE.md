# 🔧 Environment Variables Setup Guide

## 📋 Langkah Setup Environment Variables di Vercel

### 1. Buka Vercel Dashboard
1. Login ke [vercel.com](https://vercel.com)
2. Pilih project **"link-gaji-dwtdp"** atau nama project Anda
3. Klik **Settings** → **Environment Variables**

### 2. Add Variables Satu Per Satu

#### A. DATABASE_URL
```
Name: DATABASE_URL
Value: postgresql://username:password@hostname:5432/database_name
Environment: ✓ Production ✓ Preview ✓ Development
```
**⚠️ PENTING:** Ganti dengan connection string database production Anda!

#### B. GOOGLE_CREDENTIALS_JSON
```
Name: GOOGLE_CREDENTIALS_JSON
Value: {"type": "service_account", "project_id": "linkgajitdp"...}
Environment: ✓ Production ✓ Preview ✓ Development
```
**📝 Copy exact dari file PRODUCTION_ENV.txt**

#### C. GOOGLE_SPREADSHEET_ID
```
Name: GOOGLE_SPREADSHEET_ID
Value: 1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY
Environment: ✓ Production ✓ Preview ✓ Development
```

#### D. GOOGLE_DRIVE_FOLDER_ID
```
Name: GOOGLE_DRIVE_FOLDER_ID
Value: 1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ
Environment: ✓ Production ✓ Preview ✓ Development
```

#### E. NODE_ENV
```
Name: NODE_ENV
Value: production
Environment: ✓ Production ✓ Preview ✓ Development
```

## 🗄️ Setup Database Production

### Option 1: Neon Database (Recommended)
1. **Buka [neon.tech](https://neon.tech)**
2. **Sign up** dengan GitHub atau email
3. **Create New Project:**
   - Project name: `TDP Payroll System`
   - Region: pilih yang terdekat
4. **Copy Connection String:**
   - Dashboard → Connection Details
   - Copy "Pooled connection"
   - Format: `postgresql://username:password@hostname/database?sslmode=require`
5. **Update DATABASE_URL** di Vercel dengan connection string ini

### Option 2: Supabase
1. **Buka [supabase.com](https://supabase.com)**
2. **New Project** → Setup PostgreSQL
3. **Settings → Database**
4. Copy **Connection string** dari URI section
5. **Update DATABASE_URL** di Vercel

### Option 3: Railway
1. **Buka [railway.app](https://railway.app)**
2. **New Project** → **Add PostgreSQL**
3. **Variables tab** → Copy **DATABASE_URL**
4. **Update DATABASE_URL** di Vercel

## 📊 Google Sheets Permission

### Share Spreadsheet dengan Service Account:
1. **Buka Google Sheets:** [Link Spreadsheet](https://docs.google.com/spreadsheets/d/1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY)
2. **Klik Share** (pojok kanan atas)
3. **Add email:** `linkgajitdp@linkgajitdp.iam.gserviceaccount.com`
4. **Permission:** Editor
5. **Send**

## ✅ Verification Checklist

### Sebelum Deploy:
- [ ] Database production sudah dibuat dan accessible
- [ ] DATABASE_URL connection string sudah benar
- [ ] GOOGLE_CREDENTIALS_JSON sudah di-copy exact (dalam 1 baris)
- [ ] Google Sheets sudah di-share dengan service account
- [ ] Semua 5 environment variables sudah di-set di Vercel
- [ ] Environment dipilih untuk Production, Preview, Development

### Setelah Set Environment Variables:
1. **Redeploy** project di Vercel
2. **Check build logs** untuk memastikan tidak ada error
3. **Test aplikasi** di URL production
4. **Test form submission** untuk memastikan data masuk ke Google Sheets

## 🚨 Troubleshooting

### Database Connection Error?
- Check format DATABASE_URL
- Pastikan database accessible dari internet
- Verify username/password benar

### Google API Error?
- Check format GOOGLE_CREDENTIALS_JSON (harus 1 baris, valid JSON)
- Verify service account email sudah di-share ke spreadsheet
- Check Google API quota/permissions

### Build Failed?
- Check environment variables spelling
- Verify all required variables ada
- Check build logs untuk error details

---

**🎯 Setelah semua environment variables di-set, redeploy project dan aplikasi akan berfungsi normal!**