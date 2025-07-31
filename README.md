# TDP Payroll System

Indonesian payroll registration system for daily workers (Tenaga Kerja Harian Lepas).

## Features

- Landing page with payment schedule information
- Multi-step registration form with validation
- Google Sheets integration for data storage
- File upload system
- Mobile responsive design
- WhatsApp notifications

## Development

```bash
npm install
npm run dev
```

Visit: http://localhost:5000

## Environment Setup

Copy `.env.example` to `.env` and fill in your configuration:

- Database URL (PostgreSQL)
- Google Service Account credentials
- Google Sheets ID
- Google Drive folder ID

## Deployment

This application is designed to run on Replit with automatic deployment.

## Tech Stack

- Frontend: React + TypeScript + Tailwind CSS
- Backend: Express.js + TypeScript
- Database: PostgreSQL with Drizzle ORM
- File Storage: Google Drive
- Data Storage: Google Sheets