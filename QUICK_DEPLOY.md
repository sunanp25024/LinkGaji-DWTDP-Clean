# ⚡ Quick Deploy Guide

## 🚀 5-Minute Deployment to Vercel

### Step 1: Push ke GitHub (2 menit)
```bash
# Method A: Manual commands
git add .
git commit -m "Production ready TDP Payroll System"
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Fix push rejection (choose one):
git pull origin main --rebase --allow-unrelated-histories
git push origin main

# OR if above fails:
git push origin main --force

# Method B: Use script (if executable)
chmod +x git-commands.sh
./git-commands.sh
# Then follow GIT_FIX.md if push rejected
```

### Step 2: Create Database (1 menit)
**Neon (Recommended):**
1. Go to [neon.tech](https://neon.tech)
2. Create New Project: "TDP Payroll"
3. Copy connection string
4. Save for step 3

### Step 3: Deploy ke Vercel (2 menit)
1. **Import Project:**
   - [vercel.com](https://vercel.com) → New Project
   - Import from GitHub → Select repository

2. **Environment Variables:**
   - Copy dari `PRODUCTION_ENV.txt`
   - Replace `DATABASE_URL` dengan connection string dari Step 2
   - Set semua variables di Vercel Dashboard

3. **Deploy:**
   - Click "Deploy"
   - Wait for build complete

## 🎯 Environment Variables Copy-Paste

```
DATABASE_URL=postgresql://your_neon_connection_string
GOOGLE_CREDENTIALS_JSON={"type":"service_account","project_id":"YOUR_PROJECT_ID",...}
GOOGLE_SPREADSHEET_ID=1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY
GOOGLE_DRIVE_FOLDER_ID=1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ
NODE_ENV=production
VERCEL=1
```

**Note:** Copy actual Google credentials dari file attached_assets yang Anda download dari Replit untuk production.

## ✅ Testing Checklist

After deployment, test:
- [ ] Health check: `https://your-app.vercel.app/api/health`
- [ ] Landing page loads dengan logo TDP
- [ ] Form registrasi accessible
- [ ] Submit test form → data masuk Google Sheets
- [ ] WhatsApp notification received

## 🚨 Quick Fixes

**Build failed?**
- Check environment variables format
- Verify `GOOGLE_CREDENTIALS_JSON` is single line

**500 error?**
- Check Vercel Function Logs
- Verify database connection string

**Form not working?**
- Check Google Sheets permissions
- Verify service account email shared

---

**🎯 Total time: ~5 minutes untuk live deployment!**