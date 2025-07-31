import React from 'react';
import { Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileUpload } from '@/components/ui/file-upload';
import { useFormContext } from '@/lib/form-context';

export function AdditionalInfoSection() {
  const { formData, updateFormData } = useFormContext();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <Info className="mr-3 h-5 w-5 text-blue-600" />
        6. Informasi Tambahan
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="npwp">No NPWP (opsional)</Label>
          <Input
            id="npwp"
            value={formData.npwp}
            onChange={(e) => updateFormData({ npwp: e.target.value })}
          />
        </div>
        
        <div className="md:col-span-2">
          <FileUpload
            label="Upload Foto NPWP"
            onFileSelect={(file) => updateFormData({ npwpPhoto: file })}
            currentFile={formData.npwpPhoto}
            required={false}
          />
        </div>
        
        <div>
          <Label htmlFor="motherName">Nama Lengkap Ibu *</Label>
          <Input
            id="motherName"
            value={formData.motherName}
            onChange={(e) => updateFormData({ motherName: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="fatherName">Nama Lengkap Ayah *</Label>
          <Input
            id="fatherName"
            value={formData.fatherName}
            onChange={(e) => updateFormData({ fatherName: e.target.value })}
            required
          />
        </div>
      </div>
    </div>
  );
}
