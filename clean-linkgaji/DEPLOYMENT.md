# Panduan Push ke GitHub dan Deployment

## Langkah 1: Push ke GitHub

### A. Buat Repository di GitHub
1. Buka [github.com](https://github.com) dan login
2. Klik tombol "New" atau "+" untuk buat repository baru
3. Nama repository: `tdp-payroll-system` (atau nama yang Anda inginkan)
4. Set ke Public atau Private sesuai kebutuhan
5. **JANGAN centang** "Add a README file" - karena kita sudah punya
6. Klik "Create repository"

### B. Push dari Replit (Gunakan Terminal/Shell)
```bash
# 1. Initialize git (jika belum)
git init

# 2. Add semua file
git add .

# 3. Commit pertama
git commit -m "Initial commit: LINK PENGGAJIAN DW TDP - Indonesian Payroll System"

# 4. Set branch utama ke main
git branch -M main

# 5. Connect ke GitHub repository Anda
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
# Ganti USERNAME dan REPOSITORY-NAME sesuai GitHub Anda

# 6. Push ke GitHub
git push -u origin main
```

### C. Authentication GitHub
Jika diminta username/password:
- **Username**: username GitHub Anda
- **Password**: Gunakan Personal Access Token (bukan password)
  
Cara buat Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Select scopes: `repo`
3. Copy token dan gunakan sebagai password

## Persiapan untuk GitHub dan Vercel

### ✅ Yang Sudah Siap:
1. **Kode aplikasi lengkap** - Form 3 halaman dengan validasi
2. **Google Sheets integration** - Data tersimpan otomatis
3. **Database PostgreSQL** - Dengan Drizzle ORM
4. **File upload system** - Termasuk foto NPWP opsional
5. **Production build config** - Vite + ESBuild
6. **Environment variables setup** - File .env.example tersedia

### 🔧 Langkah Deployment:

#### 1. Setup Repository GitHub
```bash
git init
git add .
git commit -m "Initial commit: LINK PENGGAJIAN DW TDP"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

#### 2. Deploy ke Vercel
1. Login ke [vercel.com](https://vercel.com)
2. Import project dari GitHub
3. Set Environment Variables di Vercel Dashboard:

**Environment Variables yang Diperlukan:**
```
DATABASE_URL=postgresql://...
GOOGLE_CREDENTIALS_JSON={"type":"service_account",...}
GOOGLE_SPREADSHEET_ID=1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY
GOOGLE_DRIVE_FOLDER_ID=1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ
```

#### 3. Setup Database Production
1. Buat database PostgreSQL di Neon/Supabase/Railway
2. Update DATABASE_URL di Vercel
3. Run migration: `npm run db:push`

#### 4. Setup Google API untuk Production
1. Buat service account baru untuk production
2. Share Google Sheets dengan email service account
3. Copy credentials ke GOOGLE_CREDENTIALS_JSON

### ⚠️ Hal Penting:
- **File upload di Vercel terbatas** - Pertimbangkan gunakan Cloudinary/AWS S3
- **Google Drive quota** - Service account perlu shared drive untuk upload file
- **Database URL** - Pastikan connection string production benar
- **CORS settings** - Mungkin perlu update untuk domain production

### 🔒 Keamanan:
- Credentials Google API aman di environment variables
- Database connection encrypted
- File uploads validated di backend
- No sensitive data di git repository

### 📝 Checklist Sebelum Deploy:
- [ ] Repository GitHub sudah dibuat
- [ ] Environment variables sudah disiapkan  
- [ ] Database production sudah setup
- [ ] Google API credentials production ready
- [ ] Build process sudah ditest lokal
- [ ] Domain/subdomain sudah ditentukan

### 🚀 Langkah Terakhir:
1. Push ke GitHub
2. Connect di Vercel
3. Set environment variables
4. Deploy!

Aplikasi akan berjalan di `your-app.vercel.app`