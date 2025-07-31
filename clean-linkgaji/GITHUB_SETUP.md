# 🚀 Cara Push ke GitHub - Langkah Demi Langkah

## 📋 Persiapan

### 1. Buat Repository di GitHub
1. Buka [github.com](https://github.com) dan login
2. Klik tombol **"New"** atau **"+"** di pojok kanan atas
3. Isi detail repository:
   - **Repository name**: `tdp-payroll-system`
   - **Description**: `Indonesian Payroll Registration System - TDP Daily Worker`
   - Pilih **Public** atau **Private** sesuai kebutuhan
   - **❌ JANGAN centang "Add a README file"** (kita sudah punya)
   - **❌ JANGAN pilih .gitignore** (sudah ada)
   - **❌ JANGAN pilih license** (opsional)
4. Klik **"Create repository"**

### 2. Copy URL Repository
Setelah repository dibuat, copy URL yang muncul:
```
https://github.com/USERNAME/tdp-payroll-system.git
```

## 💻 Push dari Replit

### Buka Terminal/Shell di Replit
Klik tab **"Shell"** di bagian bawah atau samping

### Jalankan Perintah Berikut:

```bash
# 1. Add semua file ke git
git add .

# 2. Commit dengan pesan
git commit -m "Initial commit: TDP Payroll System dengan Landing Page dan WhatsApp Integration"

# 3. Set branch utama
git branch -M main

# 4. Connect ke GitHub (ganti dengan URL Anda!)
git remote add origin https://github.com/USERNAME/tdp-payroll-system.git

# 5. Push ke GitHub
git push -u origin main
```

### 🔐 Jika Diminta Login:
- **Username**: username GitHub Anda
- **Password**: Gunakan **Personal Access Token** (bukan password asli)

### Cara Buat Personal Access Token:
1. GitHub → Click foto profil → **Settings**
2. Scroll ke bawah → **Developer settings** 
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token** → **Generate new token (classic)**
5. Isi:
   - **Note**: `Replit TDP Project`
   - **Expiration**: 90 days atau No expiration
   - **Scopes**: Centang **repo** (full control)
6. **Generate token**
7. **COPY TOKEN** dan simpan (tidak akan muncul lagi!)

## ✅ Verifikasi Push Berhasil

Setelah push, check di GitHub repository Anda:
- Semua file project sudah muncul
- Ada file: README.md, package.json, client/, server/, dll
- Commit message muncul dengan benar

## 🌐 Deploy ke Vercel (Opsional)

Setelah di GitHub, Anda bisa deploy ke Vercel:

1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub
3. **Import Project** → pilih repository `tdp-payroll-system`
4. Set **Environment Variables** di Vercel:
   ```
   DATABASE_URL=your_postgres_url
   GOOGLE_SPREADSHEET_ID=1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY
   GOOGLE_DRIVE_FOLDER_ID=1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ
   ```
5. **Deploy**

## 🎯 Hasil Akhir

✅ **Repository GitHub**: Code tersimpan aman di cloud  
✅ **Vercel Deploy**: Aplikasi bisa diakses publik  
✅ **Auto Deploy**: Setiap push ke GitHub, Vercel update otomatis  

## 🆘 Jika Ada Masalah

### Error: "repository not found"
- Pastikan URL repository benar
- Pastikan repository sudah dibuat di GitHub

### Error: "authentication failed"  
- Gunakan Personal Access Token, bukan password
- Pastikan token punya akses repo

### Error: "remote already exists"
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/REPO.git
```

### File tidak terupload
```bash
# Check status
git status

# Add file yang missing
git add .
git commit -m "Add missing files"
git push
```

**🎉 Selamat! Project Anda sudah di GitHub!**