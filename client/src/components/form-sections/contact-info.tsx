import React from 'react';
import { Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormContext } from '@/lib/form-context';

export function ContactInfoSection() {
  const { formData, updateFormData } = useFormContext();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <Phone className="mr-3 h-5 w-5 text-blue-600" />
        2. Kontak
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="phone">No HP Aktif (format +62) *</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            placeholder="+628123456789"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="whatsapp">No WhatsApp Aktif *</Label>
          <Input
            id="whatsapp"
            value={formData.whatsapp}
            onChange={(e) => updateFormData({ whatsapp: e.target.value })}
            placeholder="+628123456789"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email Aktif *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            required
          />
        </div>
      </div>
    </div>
  );
}
