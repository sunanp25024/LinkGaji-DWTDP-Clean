import React from 'react';
import { FileUp } from 'lucide-react';
import { FileUpload } from '@/components/ui/file-upload';
import { useFormContext } from '@/lib/form-context';

export function DocumentUploadSection() {
  const { formData, updateFormData } = useFormContext();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <FileUp className="mr-3 h-5 w-5 text-blue-600" />
        7. Upload Dokumen
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileUpload
          label="Foto KTP ASLI"
          onFileSelect={(file) => updateFormData({ ktpPhoto: file })}
          currentFile={formData.ktpPhoto}
          required={true}
        />
        
        <FileUpload
          label="Foto KK"
          onFileSelect={(file) => updateFormData({ kkPhoto: file })}
          currentFile={formData.kkPhoto}
          required={true}
        />
        
        <FileUpload
          label="Foto Buku Tabungan/M-Banking"
          onFileSelect={(file) => updateFormData({ bankPhoto: file })}
          currentFile={formData.bankPhoto}
          required={true}
        />
        
        <FileUpload
          label="Foto Selfie"
          onFileSelect={(file) => updateFormData({ selfiePhoto: file })}
          currentFile={formData.selfiePhoto}
          required={true}
        />
      </div>
    </div>
  );
}
