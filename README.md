# LINK PENGGAJIAN DW TDP

Sistem Penggajian Daily Worker TDP - Indonesian Payroll Registration System

## Overview

Aplikasi web untuk registrasi karyawan harian dengan sistem penggajian otomatis. Menampilkan landing page dengan informasi jadwal pembayaran dan form registrasi 3 halaman lengkap dengan integrasi Google Sheets dan WhatsApp.

### Fitur Utama

- **Landing Page** dengan branding TDP dan jadwal pembayaran
- **Form Registrasi 7 Seksi** dengan validasi lengkap
- **Google Sheets Integration** untuk penyimpanan data otomatis
- **WhatsApp Integration** untuk konfirmasi admin
- **File Upload System** untuk dokumen KTP, KK, Bank, Selfie, NPWP
- **Mobile Responsive Design** dengan UI modern
- **PostgreSQL Database** untuk data persistence

### Jadwal Pembayaran

- **Tanggal 1-15** → Dibayar tanggal **25**
- **Tanggal 16-30** → Dibayar tanggal **10**

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL + Drizzle ORM
- **UI**: Tailwind CSS + shadcn/ui
- **Integration**: Google Sheets API, Google Drive API
- **Deployment**: Vercel

## Quick Start

### Development

```bash
npm install
npm run dev
```

Application will run on `http://localhost:5000`

### Build

```bash
npm run build
npm start
```

## Environment Variables

Required environment variables (see `PRODUCTION_ENV.txt` for complete list):

```env
DATABASE_URL=postgresql://...
GOOGLE_CREDENTIALS_JSON={"type":"service_account"...}
GOOGLE_SPREADSHEET_ID=1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY
GOOGLE_DRIVE_FOLDER_ID=1aqeH-9T7ttRSxL1OwMIVm7uc_AYT6nzQ
NODE_ENV=production
```

## Deployment

### Vercel

1. Import project from GitHub
2. Set environment variables in Vercel Dashboard
3. Deploy

See `VERCEL_DEPLOYMENT.md` for detailed deployment guide.

### Database Setup

Use one of these providers:
- [Neon](https://neon.tech) (Recommended)
- [Supabase](https://supabase.com)
- [Railway](https://railway.app)

## Project Structure

```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types & schema
├── api/             # Vercel serverless functions
├── uploads/         # File uploads (development)
└── dist/            # Build output
```

## Features

### Form Sections

1. **Data Pribadi** - Personal information
2. **Pendidikan** - Education details
3. **Kontak** - Contact information
4. **Bank** - Banking details
5. **Upload Dokumen** - Document uploads
6. **Review** - Data verification
7. **Success** - Confirmation page

### Document Requirements

- **KTP** (Required)
- **Kartu Keluarga** (Required)
- **Rekening Bank** (Required)
- **Foto Selfie** (Required)
- **NPWP** (Optional)

### Banking Requirements

- Must use personal bank account
- No e-wallets (DANA/OVO/GoPay)
- No third-party accounts

## API Endpoints

- `GET /` - Landing page
- `GET /form` - Registration form
- `POST /api/registrations` - Submit registration
- `GET /api/health` - Health check
- `GET /uploads/:filename` - Serve uploaded files

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## License

© 2025 TDP Daily Worker System. All rights reserved.