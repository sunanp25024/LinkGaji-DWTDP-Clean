# LINK PENGGAJIAN DW TDP

Aplikasi formulir pendaftaran penggajian Indonesia yang komprehensif dengan branding TDP profesional.

## Fitur Utama

- 📝 **Form Pendaftaran 3 Halaman**: Navigasi multi-langkah dengan validasi lengkap
- 🏢 **Branding TDP**: Desain profesional dengan identitas TDP Indonesia
- 📊 **Integrasi Google Sheets**: Data tersimpan otomatis ke Google Spreadsheet
- 🗄️ **Database PostgreSQL**: Penyimpanan data yang aman dan terstruktur
- 📤 **Upload File**: Mendukung upload KTP, KK, rekening bank, selfie, dan NPWP (opsional)
- ✅ **Validasi Lengkap**: Validasi real-time dengan feedback pengguna
- 📱 **Responsive Design**: Tampilan optimal di desktop dan mobile

## Teknologi yang Digunakan

### Frontend
- **React 18** dengan TypeScript
- **Tailwind CSS** untuk styling
- **shadcn/ui** untuk komponen UI
- **React Hook Form** untuk manajemen form
- **TanStack Query** untuk state management
- **Wouter** untuk routing

### Backend
- **Express.js** dengan TypeScript
- **PostgreSQL** dengan Drizzle ORM
- **Multer** untuk upload file
- **Google APIs** untuk integrasi Sheets dan Drive
- **Zod** untuk validasi data

## Setup dan Instalasi

### 1. Clone Repository
```bash
git clone <repository-url>
cd link-penggajian-tdp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Buat file `.env` dengan variabel berikut:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

# Google API Credentials
GOOGLE_CREDENTIALS_JSON={"type": "service_account", ...}
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_DRIVE_FOLDER_ID=your_drive_folder_id

# Server
NODE_ENV=development
PORT=5000
```

### 4. Setup Database
```bash
npm run db:push
```

### 5. Jalankan Development Server
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5000`

## Build untuk Production

```bash
npm run build
npm start
```

## Deployment

### Deploy ke Vercel

1. Push kode ke GitHub
2. Connect repository ke Vercel
3. Set environment variables di Vercel dashboard
4. Deploy akan berjalan otomatis

### Environment Variables untuk Production

- `DATABASE_URL`: Connection string PostgreSQL
- `GOOGLE_CREDENTIALS_JSON`: Service account credentials
- `GOOGLE_SPREADSHEET_ID`: ID spreadsheet tujuan
- `GOOGLE_DRIVE_FOLDER_ID`: ID folder Google Drive

## Struktur Project

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and configurations
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express application
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   ├── google-integration.ts # Google APIs integration
│   └── index.ts           # Server entry point
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schema and validation
└── uploads/               # File upload directory
```

## Fitur Form

### Halaman 1: Data Pribadi
- Informasi dasar (nama, NIK, tempat lahir, dll)
- Alamat KTP dan domisili
- Informasi kontak (telepon, WhatsApp, email)

### Halaman 2: Data Pendidikan & Darurat
- Riwayat pendidikan lengkap
- Kontak darurat
- Informasi bank dan rekening

### Halaman 3: Upload Dokumen
- Foto KTP (wajib)
- Foto Kartu Keluarga (wajib)
- Foto rekening bank (wajib)
- Foto selfie (wajib)
- Foto NPWP (opsional)

## API Endpoints

- `POST /api/registrations` - Submit form registrasi
- `GET /uploads/:filename` - Akses file yang diupload

## Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push ke branch (`git push origin feature/new-feature`)
5. Buat Pull Request

## Lisensi

MIT License