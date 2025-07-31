# 🚀 Push ke Repository Baru - Manual Commands

## ✅ Repository Baru Sudah Dibuat
https://github.com/sunanp25024/LinkGaji-DWTDP-Clean.git

## 🔧 Commands untuk Manual Push

Jalankan commands ini di terminal workspace:

### 1. Update Remote Repository
```bash
# Cek remote current
git remote -v

# Hapus remote lama  
git remote set-url origin https://github.com/sunanp25024/LinkGaji-DWTDP-Clean.git

# Verify remote baru
git remote -v
```

### 2. Push ke Repository Baru
```bash
# Push ke repository bersih
git push -u origin main
```

### 3. Jika Authentication Error
```bash
# Generate personal access token di GitHub:
# Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
# Select scopes: repo, workflow
# Copy token

# Push dengan token
git push https://YOUR_TOKEN@github.com/sunanp25024/LinkGaji-DWTDP-Clean.git main
```

### 4. Alternative: Download dan Re-upload
Jika git push masih bermasalah:

1. **Download project files:**
   - Download semua files dari workspace sebagai ZIP
   - Extract ke komputer lokal

2. **Upload ke GitHub:**
   - Buka repository: https://github.com/sunanp25024/LinkGaji-DWTDP-Clean
   - Klik "uploading an existing file"
   - Drag & drop semua files
   - Commit dengan message: "feat: TDP Payroll System - Production Ready"

## 🌐 Setelah Push Berhasil → Deploy ke Vercel

### 1. Import ke Vercel
1. Buka https://vercel.com/new
2. Import Git Repository
3. Select: sunanp25024/LinkGaji-DWTDP-Clean
4. Import

### 2. Project Settings
- Framework Preset: **Other**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 3. Environment Variables
```
DATABASE_URL=postgresql://your_neon_connection_string

GOOGLE_CREDENTIALS_JSON={"type":"service_account","project_id":"linkgajitdp","private_key_id":"79a1f502ce62ac6667f0717faf6cebdd9c1f736c","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD/zIjKZqyL5p52\nwzdNARbK3UbHNCU8fSZGF9kSIXpZwITP4LpCAJKCR8cQC/sgC7cz1mQ3wrdWV+X6\npBUUkpWsqNoNkc8oJ8wLZ6UvKsIqgmpvaHApD+bZuAJyOhZyp8YYt40wr4J6CIi/\nICUsm7pGgyn2W2+8r4Q/hzhMlBthdJhSPgcBdjUZX0xt8h09uJbiDR1XcrmKq8Ju\nbvcixnuGV9/0Q4SXvEKaKBMLA9/vsG7GchlOyOCeF67IWNLjDMxwcHTSSwPsCGMl\n3xtcN/S2q3hn37AZtcu6ia6Sx+D/owDLio9gXXjudNA1xQPlVPJdz3+ezTWyB0m4\nyyYCakndAgMBAAECggEAe/+RO9RDxlmX7Wg6cXiarOJRAhW0Czt7hzTeRBy4a7OY\nbhC5GW+flcnnpE66gFFNkLJXyHP6Xb+kOzi5A0z/g0Ai27sX2ZZZIhovB8tJbkPk\nBndxD2am+FlrziV8Zj4QGEE6DyS1MiTa7RNPEe23gaDpgYPXiXbnu8f3sZ+GGlnr\nt74k+32thiNm01kXPxwV+GSAvdMmDNXM4bpFgMgM/xioa6ZV7VYd97cTcC7iwI7p\nxbEvgQqg0/lbJzGXgYX4DhCYJcnp31zweFBNr1FTXSW7O2XWI3zj41sA3YVpk6Fl\nYvqvAeGr7GPclVuhUbB0bw6tLT2MaT5MnOOJSlFV3QKBgQD/8W2MY7YbTVCYxU4U\n462Ag4WEha7KvPwWAPnMx/e6y0jJpQGuesQC6DSlaBc0yRihh1T30IMgoVHt9VAm\ni2tUxGxrPBVahu5THAdMRFu7BmLaJYI6u1At19mFdLUISTe8W6izyi8m0nlCq9rq\nvsMir1PqCjkaN3fgWDJm3I3OwwKBgQD/2xkkRp7BhXXc3sjF6RbaBpx5fqFO0RJl\nfswxG2bHsygahYPJsKrlX1ijPL6JOvd7VqLMVSqq4NEz7k4GNMJbM8Aa+SOniADV\neDnDmvVisVzZZajILAA73ztnbVTf1/1UX4Hq1AF8lVtEnls2n/e88TQZL+TYTrnh\nHLakGxk63wKBgQDI68aMB1rWZAN5aqq5S2LRGG6gcjGdhm5+95UiZXjcculZIugH\nCOkHPzLVBrnw/k0PwSW6xT2rR/kBTSr2l0xS50AVjr1Uq8g8BizUenVohMLlbbym\nTpXK50AjvFLBhnjyrSHqwjXxzBjVdgQNdGPLvsepWw0ov5Kj05j9lvbb8QKBgHJY\nD7dnnEGujIsmQaI5Vo4f0ER39E1OIKOddFIqBdgP2EdqDgjQXL/fybRCTID2Cm5j\nvKQHF+eAS96ijNo3L/kkeqFTYLzZik3cyiwCD9KIo49A4Jp9F6mqTVkewoS7easA\neAZjszpjYYOcJfWWrlgRkBAFmIeXP3k8pN9YgQEPAoGAejzolx7x+upp3RwmKz0F\nXjgaTuXR+QyIJe5IcIvJe6ZVztC/6jfYpu3SWkh1oWP9lH2MhtsIA/uk6zzQWDt3\n8GSyTtkoPcZO9p3YLFtQqdRWuEMDDWmCuWHJKspCU9s/fDgoZKTV+gHQ1AGjpHP9\nml5qP5jFcLJNINN11BZ5UH8=\n-----END PRIVATE KEY-----\n","client_email":"linkgajitdp@linkgajitdp.iam.gserviceaccount.com","client_id":"110602267309150418834","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/linkgajitdp%40linkgajitdp.iam.gserviceaccount.com","universe_domain":"googleapis.com"}

GOOGLE_SPREADSHEET_ID=1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY

GOOGLE_DRIVE_FOLDER_ID=1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ

NODE_ENV=production

VERCEL=1
```

### 4. Deploy
1. Klik **Deploy**
2. Tunggu build selesai
3. Test aplikasi di URL yang diberikan

## ✅ Expected Results

Setelah deploy berhasil:
- Landing Page: https://your-app.vercel.app
- Registration Form: https://your-app.vercel.app/form
- Health Check: https://your-app.vercel.app/api/health

---

**🎯 Repository baru → push berhasil → deploy sukses!**