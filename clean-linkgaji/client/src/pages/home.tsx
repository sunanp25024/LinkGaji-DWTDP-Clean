import React from 'react';
import { ArrowRight, ArrowLeft, Send, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { FormProvider, useFormContext } from '@/lib/form-context';
import { PersonalInfoSection } from '@/components/form-sections/personal-info';
import { ContactInfoSection } from '@/components/form-sections/contact-info';
import { EducationInfoSection } from '@/components/form-sections/education-info';
import { EmergencyContactSection } from '@/components/form-sections/emergency-contact';
import { BankInfoSection } from '@/components/form-sections/bank-info';
import { AdditionalInfoSection } from '@/components/form-sections/additional-info';
import { DocumentUploadSection } from '@/components/form-sections/document-upload';
import tdpLogoUrl from "@assets/TDP_1753902031441.png";

function ProgressIndicator() {
  const { currentPage } = useFormContext();
  
  const steps = [
    { number: 1, title: 'Form' },
    { number: 2, title: 'Review' },
    { number: 3, title: 'Sukses' }
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
      <div className="flex items-center space-x-1">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
              step.number <= currentPage 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-300 text-gray-600'
            }`}>
              {step.number}
            </div>
            {index < steps.length - 1 && (
              <div className="w-4 sm:w-8 h-1 bg-gray-300 ml-1"></div>
            )}
          </div>
        ))}
      </div>
      <span className="text-xs sm:text-sm text-gray-600">
        Halaman {currentPage} dari 3
      </span>
    </div>
  );
}

function FormPage() {
  const { setCurrentPage, formData } = useFormContext();

  const validateForm = () => {
    const requiredFields = [
      'opsId', 'fullName', 'nik', 'birthPlace', 'birthDate', 'gender',
      'ktpAddress', 'currentAddress', 'rtRw', 'houseNumber', 'kelurahan',
      'kecamatan', 'city', 'postalCode', 'religion', 'maritalStatus',
      'citizenship', 'phone', 'whatsapp', 'email', 'educationLevel',
      'schoolName', 'entryYear', 'graduationYear', 'emergencyName',
      'emergencyPhone', 'emergencyWhatsapp', 'emergencyRelationship',
      'bankName', 'accountNumber', 'accountHolder', 'motherName', 'fatherName'
    ];

    const requiredFiles = ['ktpPhoto', 'kkPhoto', 'bankPhoto', 'selfiePhoto'];

    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        return false;
      }
    }

    for (const file of requiredFiles) {
      if (!formData[file as keyof typeof formData]) {
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (validateForm()) {
      setCurrentPage(2);
    } else {
      alert('Mohon lengkapi semua field yang wajib diisi');
    }
  };

  return (
    <div className="space-y-8">
      <PersonalInfoSection />
      <ContactInfoSection />
      <EducationInfoSection />
      <EmergencyContactSection />
      <BankInfoSection />
      <AdditionalInfoSection />
      <DocumentUploadSection />
      
      <div className="flex justify-end pt-6">
        <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
          Lanjutkan ke Review
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function ReviewPage() {
  const { formData, setCurrentPage } = useFormContext();

  const sections = [
    {
      title: 'Informasi Diri',
      data: {
        'OpsID': formData.opsId,
        'Nama Lengkap': formData.fullName,
        'NIK KTP': formData.nik,
        'Tempat Lahir': formData.birthPlace,
        'Tanggal Lahir': formData.birthDate,
        'Umur': formData.age?.toString(),
        'Jenis Kelamin': formData.gender,
        'Alamat KTP': formData.ktpAddress,
        'Alamat Domisili': formData.currentAddress,
        'RT/RW': formData.rtRw,
        'No Rumah': formData.houseNumber,
        'Kelurahan': formData.kelurahan,
        'Kecamatan': formData.kecamatan,
        'Kota': formData.city,
        'Kode Pos': formData.postalCode,
        'Agama': formData.religion,
        'Status Perkawinan': formData.maritalStatus,
        'Kewarganegaraan': formData.citizenship,
      }
    },
    {
      title: 'Kontak',
      data: {
        'No HP': formData.phone,
        'No WhatsApp': formData.whatsapp,
        'Email': formData.email,
      }
    },
    {
      title: 'Pendidikan',
      data: {
        'Tingkat Pendidikan': formData.educationLevel,
        'Nama Sekolah': formData.schoolName,
        'Jurusan': formData.major,
        'Tahun Masuk': formData.entryYear?.toString(),
        'Tahun Lulus': formData.graduationYear?.toString(),
        'IPK': formData.gpa,
      }
    },
    {
      title: 'Kontak Darurat',
      data: {
        'Nama': formData.emergencyName,
        'No HP': formData.emergencyPhone,
        'No WhatsApp': formData.emergencyWhatsapp,
        'Hubungan': formData.emergencyRelationship,
      }
    },
    {
      title: 'Informasi Bank',
      data: {
        'Nama Bank': formData.bankName,
        'Nomor Rekening': formData.accountNumber,
        'Nama Penerima': formData.accountHolder,
      }
    },
    {
      title: 'Informasi Tambahan',
      data: {
        'No NPWP': formData.npwp || '-',
        'Nama Ibu': formData.motherName,
        'Nama Ayah': formData.fatherName,
      }
    }
  ];

  const files = [
    { label: 'KTP', file: formData.ktpPhoto },
    { label: 'KK', file: formData.kkPhoto },
    { label: 'Buku Tabungan', file: formData.bankPhoto },
    { label: 'Selfie', file: formData.selfiePhoto },
    { label: 'NPWP', file: formData.npwpPhoto },
  ];

  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
          <CheckCircle className="mr-3 h-6 w-6 text-blue-600" />
          Review Data Anda
        </h2>
        <p className="text-gray-600 mb-8">
          Silakan periksa kembali semua informasi yang telah Anda masukkan sebelum mengirimkan formulir.
        </p>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {Object.entries(section.data).map(([key, value]) => (
                  value && (
                    <div key={key}>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        {key}
                      </label>
                      <p className="text-sm text-gray-900">{value}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Dokumen yang Diupload
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
              {files.map((item) => (
                <div key={item.label} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                    item.file ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <CheckCircle className={`h-8 w-8 ${
                      item.file ? 'text-green-600' : 'text-red-600'
                    }`} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{item.label}</p>
                  <p className="text-xs text-gray-500 truncate">
                    {item.file ? item.file.name : 'Tidak ada file'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-6 sm:pt-8 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Form
          </Button>
          <SubmitButton />
        </div>
      </CardContent>
    </Card>
  );
}

function SubmitButton() {
  const { formData, setCurrentPage, setIsSubmitting } = useFormContext();
  const { toast } = useToast();

  const submitMutation = useMutation({
    mutationFn: async () => {
      const formDataToSend = new FormData();
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined && typeof value !== 'object') {
          formDataToSend.append(key, value.toString());
        }
      });

      // Add files
      if (formData.ktpPhoto) formDataToSend.append('ktpPhoto', formData.ktpPhoto);
      if (formData.kkPhoto) formDataToSend.append('kkPhoto', formData.kkPhoto);
      if (formData.bankPhoto) formDataToSend.append('bankPhoto', formData.bankPhoto);
      if (formData.selfiePhoto) formDataToSend.append('selfiePhoto', formData.selfiePhoto);
      if (formData.npwpPhoto) formDataToSend.append('npwpPhoto', formData.npwpPhoto);

      const response = await fetch('/api/registrations', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Terjadi kesalahan');
      }

      return response.json();
    },
    onSuccess: () => {
      setCurrentPage(3);
      toast({
        title: "Berhasil!",
        description: "Formulir berhasil dikirim",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  const handleSubmit = () => {
    setIsSubmitting(true);
    submitMutation.mutate();
  };

  return (
    <Button
      onClick={handleSubmit}
      disabled={submitMutation.isPending}
      className="bg-green-600 hover:bg-green-700"
    >
      {submitMutation.isPending ? 'Mengirim...' : 'Kirim Data'}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

function SuccessPage() {
  const { formData } = useFormContext();

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Halo Admin\nSaya sudah mengisi data penggajian, berikut informasinya:\n\nOpsID: ${formData.opsId}\nNama Lengkap: ${formData.fullName}\nNIK: ${formData.nik}\nBank: ${formData.bankName}\nNo Rekening: ${formData.accountNumber}\nNama Penerima: ${formData.accountHolder}\n\nMohon bantuannya untuk dicek dan diproses ya.\nTerima kasih banyak!`
    );
    const phoneNumber = '62895384799331'; // Nomor admin WhatsApp yang benar
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Card>
      <CardContent className="p-4 sm:p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Formulir Berhasil Dikirim!
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Data Anda telah berhasil disimpan dan akan segera diproses oleh tim HR kami.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <h3 className="font-semibold text-gray-700 mb-2">Langkah Selanjutnya:</h3>
          <ul className="text-sm text-gray-600 space-y-1 text-left max-w-md mx-auto">
            <li>• Tim HR akan memverifikasi dokumen Anda dalam 1-2 hari kerja</li>
            <li>• Anda akan dihubungi via WhatsApp untuk konfirmasi</li>
            <li>• Proses penggajian akan dilakukan setelah tutup buku di setiap periode</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-600">Butuh bantuan atau ada pertanyaan?</p>
          <Button
            onClick={handleWhatsAppContact}
            className="bg-green-500 hover:bg-green-600 w-full sm:w-auto"
          >
            <Phone className="mr-2 h-4 w-4" />
            Hubungi Admin WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function MainContent() {
  const { currentPage } = useFormContext();

  return (
    <>
      {currentPage === 1 && <FormPage />}
      {currentPage === 2 && <ReviewPage />}
      {currentPage === 3 && <SuccessPage />}
    </>
  );
}

export default function Home() {
  return (
    <FormProvider>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img 
                  src={tdpLogoUrl} 
                  alt="TDP Logo" 
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <div className="text-center sm:text-left">
                  <h1 className="text-lg sm:text-2xl font-bold text-blue-600">
                    LINK PENGGAJIAN DW TDP
                  </h1>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Formulir Registrasi Karyawan
                  </p>
                </div>
              </div>
              <ProgressIndicator />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
          <MainContent />
        </main>
      </div>
    </FormProvider>
  );
}
