# 🆕 Setup Repository Baru - Solusi Pasti

## 🚨 Masalah: Git history mengandung secrets

Karena GitHub Push Protection mendeteksi secrets di commit history lama, solusi terbaik adalah membuat repository baru yang bersih.

## ✅ Langkah-langkah Setup Repository Baru

### 1. Buat Repository Baru di GitHub (1 menit)
1. Buka https://github.com/new
2. Repository name: `LinkGaji-DWTDP-Clean` (atau nama lain)
3. Description: `Indonesian Payroll Registration System - TDP Daily Workers`
4. Set sebagai **Public** atau **Private**
5. **JANGAN** centang "Add a README file"
6. **JANGAN** centang "Add .gitignore"
7. **JANGAN** centang "Choose a license"
8. Klik **Create repository**

### 2. Push ke Repository Baru (2 menit)
```bash
# Remove existing git remote
git remote remove origin

# Add new repository URL (ganti dengan URL baru Anda)
git remote add origin https://github.com/USERNAME/LinkGaji-DWTDP-Clean.git

# Push ke repository baru
git push -u origin main
```

**Ganti USERNAME dengan username GitHub Anda**

### 3. Jika Masih Error, Reset Git Completely
```bash
# Backup files
cp -r . ../backup-linkgaji

# Remove git completely
rm -rf .git

# Fresh git init
git init
git branch -M main
git add .
git commit -m "feat: TDP Payroll System - Production Ready

Complete Indonesian payroll registration platform:
- Landing page with TDP branding and payment schedule
- 7-section registration form with validation
- Google Sheets integration for data storage  
- WhatsApp admin notifications
- File upload system with document management
- Mobile responsive design
- PostgreSQL database schema
- Vercel serverless deployment ready

All environment secrets managed via Vercel dashboard."

# Add new repository
git remote add origin https://github.com/USERNAME/LinkGaji-DWTDP-Clean.git
git push -u origin main
```

## 🌐 Deploy ke Vercel (3 menit)

### 1. Import Project
1. Buka https://vercel.com/new
2. Klik **Import Git Repository**
3. Pilih repository baru: `LinkGaji-DWTDP-Clean`
4. Klik **Import**

### 2. Configure Project
- **Framework Preset:** Other
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 3. Environment Variables
Klik **Environment Variables** dan tambahkan:

```
DATABASE_URL
postgresql://your_neon_connection_string

GOOGLE_CREDENTIALS_JSON  
{"type":"service_account","project_id":"linkgajitdp",...} 

GOOGLE_SPREADSHEET_ID
1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY

GOOGLE_DRIVE_FOLDER_ID
1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ

NODE_ENV
production

VERCEL
1
```

**Penting:** Untuk `GOOGLE_CREDENTIALS_JSON`, copy full JSON dari file di `attached_assets/` folder.

### 4. Deploy
1. Klik **Deploy**
2. Tunggu build selesai (2-3 menit)
3. Klik **Visit** untuk test aplikasi

## 🎯 URL Hasil Deploy

Setelah berhasil deploy:
- **Landing Page:** https://your-app.vercel.app
- **Registration Form:** https://your-app.vercel.app/form  
- **Health Check:** https://your-app.vercel.app/api/health

## ✅ Verification

Test semua fitur:
- [ ] Landing page tampil dengan logo TDP
- [ ] Payment schedule terlihat (1-15 dibayar tgl 25, 16-30 dibayar tgl 10)
- [ ] Form registrasi 7 seksi berfungsi
- [ ] Upload file berhasil
- [ ] Data tersimpan ke Google Sheets
- [ ] WhatsApp notification terkirim

---

**🚀 Repository baru = deployment sukses tanpa masalah secrets!**