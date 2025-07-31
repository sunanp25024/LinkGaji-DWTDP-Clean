# 🚀 Alternative Deployment - Direct Upload to Vercel

## 🚨 Git Issue Solution

Karena git config terkunci, kita akan deploy langsung tanpa GitHub sebagai perantara.

## ✅ Option 1: Direct Vercel CLI Deploy

### 1. Install Vercel CLI di Workspace
```bash
npm install -g vercel
```

### 2. Login dan Deploy
```bash
# Login ke Vercel
vercel login

# Deploy project langsung
vercel --prod
```

### 3. Set Environment Variables
Setelah deploy, set environment variables di Vercel dashboard:
- DATABASE_URL
- GOOGLE_CREDENTIALS_JSON  
- GOOGLE_SPREADSHEET_ID=1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY
- GOOGLE_DRIVE_FOLDER_ID=1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ
- NODE_ENV=production
- VERCEL=1

## ✅ Option 2: Manual File Upload to GitHub

### 1. Download Project Files
```bash
# Create archive of project
tar -czf linkgaji-tdp.tar.gz --exclude='.git' --exclude='node_modules' .
```

### 2. Manual Upload ke GitHub
1. Buka https://github.com/sunanp25024/LinkGaji-DWTDP-Clean
2. Klik "uploading an existing file"
3. Upload semua files project (kecuali .git dan node_modules)
4. Commit: "feat: TDP Payroll System - Production Ready"

### 3. Import ke Vercel dari GitHub
1. vercel.com/new
2. Import LinkGaji-DWTDP-Clean
3. Deploy dengan environment variables

## ✅ Option 3: Direct Zip Upload (Simplest)

### 1. Prepare Clean Files
```bash
# Create deployment package
mkdir -p ../deploy-package
cp -r . ../deploy-package/
cd ../deploy-package
rm -rf .git node_modules test_uploads uploads
```

### 2. Upload ke GitHub Web Interface
1. Buka repository: https://github.com/sunanp25024/LinkGaji-DWTDP-Clean
2. Upload files via web interface
3. Commit changes

### 3. Deploy via Vercel
Import dan deploy dengan environment variables lengkap.

## 🎯 Recommended: Option 1 (Vercel CLI)

Paling mudah dan langsung, tanpa perlu GitHub sebagai perantara.

## 📋 Environment Variables untuk Vercel

Copy-paste ini ke Vercel dashboard:

```
DATABASE_URL=postgresql://your_neon_connection_string

GOOGLE_CREDENTIALS_JSON={"type":"service_account","project_id":"linkgajitdp","private_key_id":"79a1f502ce62ac6667f0717faf6cebdd9c1f736c","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD/zIjKZqyL5p52\nwzdNARbK3UbHNCU8fSZGF9kSIXpZwITP4LpCAJKCR8cQC/sgC7cz1mQ3wrdWV+X6\npBUUkpWsqNoNkc8oJ8wLZ6UvKsIqgmpvaHApD+bZuAJyOhZyp8YYt40wr4J6CIi/\nICUsm7pGgyn2W2+8r4Q/hzhMlBthdJhSPgcBdjUZX0xt8h09uJbiDR1XcrmKq8Ju\nbvcixnuGV9/0Q4SXvEKaKBMLA9/vsG7GchlOyOCeF67IWNLjDMxwcHTSSwPsCGMl\n3xtcN/S2q3hn37AZtcu6ia6Sx+D/owDLio9gXXjudNA1xQPlVPJdz3+ezTWyB0m4\nyyYCakndAgMBAAECggEAe/+RO9RDxlmX7Wg6cXiarOJRAhW0Czt7hzTeRBy4a7OY\nbhC5GW+flcnnpE66gFFNkLJXyHP6Xb+kOzi5A0z/g0Ai27sX2ZZZIhovB8tJbkPk\nBndxD2am+FlrziV8Zj4QGEE6DyS1MiTa7RNPEe23gaDpgYPXiXbnu8f3sZ+GGlnr\nt74k+32thiNm01kXPxwV+GSAvdMmDNXM4bpFgMgM/xioa6ZV7VYd97cTcC7iwI7p\nxbEvgQqg0/lbJzGXgYX4DhCYJcnp31zweFBNr1FTXSW7O2XWI3zj41sA3YVpk6Fl\nYvqvAeGr7GPclVuhUbB0bw6tLT2MaT5MnOOJSlFV3QKBgQD/8W2MY7YbTVCYxU4U\n462Ag4WEha7KvPwWAPnMx/e6y0jJpQGuesQC6DSlaBc0yRihh1T30IMgoVHt9VAm\ni2tUxGxrPBVahu5THAdMRFu7BmLaJYI6u1At19mFdLUISTe8W6izyi8m0nlCq9rq\nvsMir1PqCjkaN3fgWDJm3I3OwwKBgQD/2xkkRp7BhXXc3sjF6RbaBpx5fqFO0RJl\nfswxG2bHsygahYPJsKrlX1ijPL6JOvd7VqLMVSqq4NEz7k4GNMJbM8Aa+SOniADV\neDnDmvVisVzZZajILAA73ztnbVTf1/1UX4Hq1AF8lVtEnls2n/e88TQZL+TYTrnh\nHLakGxk63wKBgQDI68aMB1rWZAN5aqq5S2LRGG6gcjGdhm5+95UiZXjcculZIugH\nCOkHPzLVBrnw/k0PwSW6xT2rR/kBTSr2l0xS50AVjr1Uq8g8BizUenVohMLlbbym\nTpXK50AjvFLBhnjyrSHqwjXxzBjVdgQNdGPLvsepWw0ov5Kj05j9lvbb8QKBgHJY\nD7dnnEGujIsmQaI5Vo4f0ER39E1OIKOddFIqBdgP2EdqDgjQXL/fybRCTID2Cm5j\nvKQHF+eAS96ijNo3L/kkeqFTYLzZik3cyiwCD9KIo49A4Jp9F6mqTVkewoS7easA\neAZjszpjYYOcJfWWrlgRkBAFmIeXP3k8pN9YgQEPAoGAejzolx7x+upp3RwmKz0F\nXjgaTuXR+QyIJe5IcIvJe6ZVztC/6jfYpu3SWkh1oWP9lH2MhtsIA/uk6zzQWDt3\n8GSyTtkoPcZO9p3YLFtQqdRWuEMDDWmCuWHJKspCU9s/fDgoZKTV+gHQ1AGjpHP9\nml5qP5jFcLJNINN11BZ5UH8=\n-----END PRIVATE KEY-----\n","client_email":"linkgajitdp@linkgajitdp.iam.gserviceaccount.com","client_id":"110602267309150418834","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/linkgajitdp%40linkgajitdp.iam.gserviceaccount.com","universe_domain":"googleapis.com"}

GOOGLE_SPREADSHEET_ID=1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY

GOOGLE_DRIVE_FOLDER_ID=1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ

NODE_ENV=production

VERCEL=1
```

---

**🎯 Skip GitHub → Deploy langsung ke Vercel = Solved!**