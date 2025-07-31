# LINK PENGGAJIAN DW TDP - Indonesian Payroll Registration Form

## Overview

This is a comprehensive 3-page Indonesian payroll registration form application called "LINK PENGGAJIAN DW TDP" built with React frontend and Express.js backend. The application features professional TDP branding and allows users to submit detailed registration forms with personal information, education details, contact information, bank details, and document uploads. The form includes full validation, multi-step navigation, Google Sheets integration, and local file storage for testing purposes.

**Status**: ✅ **PRODUCTION READY** - Complete Indonesian payroll registration system with landing page, 3-page form, Google Sheets integration, WhatsApp confirmation, and mobile responsive design. Landing page displays TDP branding with payment schedule and requirements. Form submission tested successfully with PostgreSQL database storage. File upload system processes files as descriptive information. WhatsApp integration auto-fills user data. Ready for GitHub deployment with comprehensive setup guides. Test data confirmed at spreadsheet ID 1BNhyJfE2ejqAAXes1gz6HaBd2KijtG86xkGA1AbxXDY.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme
- **State Management**: React Context API for form state management
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with persistent storage
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **File Uploads**: Multer middleware for handling multipart/form-data
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple
- **Development**: Hot module replacement with Vite integration

## Key Components

### Form Management System
- **Multi-step Form**: 7-section registration form with progress tracking
- **Form Context**: Centralized state management for form data across sections
- **Validation**: Client-side validation with real-time feedback
- **File Upload**: Custom file upload component with drag-and-drop support

### Database Schema
- **Comprehensive Registration Table**: Stores personal info, education, contacts, bank details, and additional information
- **File References**: Tracks uploaded document file paths
- **UUID Primary Keys**: Uses PostgreSQL's gen_random_uuid() for unique identifiers
- **Timestamp Tracking**: Automatic creation time tracking

### UI Components
- **Design System**: Based on shadcn/ui with "new-york" style variant
- **Responsive Design**: Mobile-first approach with breakpoint-aware components
- **Form Sections**: Modular form sections for different data categories
- **Progress Indicator**: Visual progress tracking through form steps

## Data Flow

1. **Form Submission Flow**:
   - User fills out multi-step form sections
   - Form data stored in React Context during completion
   - File uploads handled separately with preview functionality
   - Final submission combines form data with file references
   - Backend validates and stores data in PostgreSQL

2. **File Upload Flow**:
   - Files uploaded to local `uploads/` directory
   - File validation for type and size constraints
   - File paths stored in database alongside form data
   - Static file serving for uploaded documents

3. **Error Handling**:
   - Client-side validation with toast notifications
   - Server-side error middleware with structured responses
   - File upload error handling with user feedback

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL for production
- **Connection**: Uses DATABASE_URL environment variable
- **Migration**: Drizzle Kit for schema management

### File Storage
- **Local Storage**: Files stored in `uploads/` directory
- **Static Serving**: Express serves uploaded files
- **Validation**: Image-only uploads with 5MB size limit

### UI Libraries
- **Radix UI**: Primitive components for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: Component variant management

## Deployment Strategy

### Development
- **Vite Dev Server**: Hot module replacement for frontend
- **Express Server**: Backend API with middleware logging
- **File Watching**: TypeScript compilation with incremental builds
- **Replit Integration**: Special handling for Replit environment

### Production Build
- **Frontend Build**: Vite builds optimized static assets to `dist/public`
- **Backend Build**: ESBuild bundles server code to `dist/index.js`
- **Static Assets**: Production server serves built frontend files
- **Environment Variables**: Database URL and other configs via environment

### File Structure
- **Monorepo Structure**: Client and server code in same repository
- **Shared Types**: Common TypeScript types in `shared/` directory
- **Asset Management**: Static assets handled through Vite aliases
- **Path Resolution**: TypeScript path mapping for clean imports

The application follows modern full-stack development practices with clear separation of concerns, type safety throughout, and a scalable architecture that can grow with additional features.