import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFormContext } from '@/lib/form-context';

export function EmergencyContactSection() {
  const { formData, updateFormData } = useFormContext();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <AlertTriangle className="mr-3 h-5 w-5 text-blue-600" />
        4. Kontak Darurat
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <Label htmlFor="emergencyName">Nama Kontak Darurat *</Label>
          <Input
            id="emergencyName"
            value={formData.emergencyName}
            onChange={(e) => updateFormData({ emergencyName: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="emergencyPhone">No HP Aktif Kontak Darurat *</Label>
          <Input
            id="emergencyPhone"
            value={formData.emergencyPhone}
            onChange={(e) => updateFormData({ emergencyPhone: e.target.value })}
            placeholder="+628123456789"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="emergencyWhatsapp">No WhatsApp Aktif Kontak Darurat *</Label>
          <Input
            id="emergencyWhatsapp"
            value={formData.emergencyWhatsapp}
            onChange={(e) => updateFormData({ emergencyWhatsapp: e.target.value })}
            placeholder="+628123456789"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="emergencyRelationship">Status Hubungan *</Label>
          <Select value={formData.emergencyRelationship} onValueChange={(value) => updateFormData({ emergencyRelationship: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Hubungan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Orang Tua">Orang Tua</SelectItem>
              <SelectItem value="Suami/Istri">Suami/Istri</SelectItem>
              <SelectItem value="Anak">Anak</SelectItem>
              <SelectItem value="Saudara">Saudara</SelectItem>
              <SelectItem value="Teman">Teman</SelectItem>
              <SelectItem value="Lainnya">Lainnya</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
