export interface FormData {
  // Personal Information
  opsId: string;
  fullName: string;
  nik: string;
  birthPlace: string;
  birthDate: string;
  age: number;
  gender: string;
  ktpAddress: string;
  currentAddress: string;
  rtRw: string;
  houseNumber: string;
  kelurahan: string;
  kecamatan: string;
  city: string;
  postalCode: string;
  religion: string;
  maritalStatus: string;
  citizenship: string;
  
  // Contact Information
  phone: string;
  whatsapp: string;
  email: string;
  
  // Education
  educationLevel: string;
  schoolName: string;
  major: string;
  entryYear: number;
  graduationYear: number;
  gpa: string;
  
  // Emergency Contact
  emergencyName: string;
  emergencyPhone: string;
  emergencyWhatsapp: string;
  emergencyRelationship: string;
  
  // Bank Information
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  
  // Additional Information
  npwp: string;
  motherName: string;
  fatherName: string;
  
  // Files
  ktpPhoto: File | null;
  kkPhoto: File | null;
  bankPhoto: File | null;
  selfiePhoto: File | null;
  npwpPhoto: File | null;
}

export const defaultFormData: FormData = {
  opsId: '',
  fullName: '',
  nik: '',
  birthPlace: '',
  birthDate: '',
  age: 0,
  gender: '',
  ktpAddress: '',
  currentAddress: '',
  rtRw: '',
  houseNumber: '',
  kelurahan: '',
  kecamatan: '',
  city: '',
  postalCode: '',
  religion: '',
  maritalStatus: '',
  citizenship: 'Indonesia',
  phone: '',
  whatsapp: '',
  email: '',
  educationLevel: '',
  schoolName: '',
  major: '',
  entryYear: new Date().getFullYear(),
  graduationYear: new Date().getFullYear(),
  gpa: '',
  emergencyName: '',
  emergencyPhone: '',
  emergencyWhatsapp: '',
  emergencyRelationship: '',
  bankName: '',
  accountNumber: '',
  accountHolder: '',
  npwp: '',
  motherName: '',
  fatherName: '',
  ktpPhoto: null,
  kkPhoto: null,
  bankPhoto: null,
  selfiePhoto: null,
  npwpPhoto: null,
};
