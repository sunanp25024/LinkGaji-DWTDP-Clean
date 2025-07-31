import React from 'react';
import { Building } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFormContext } from '@/lib/form-context';

export function BankInfoSection() {
  const { formData, updateFormData } = useFormContext();

  const bankOptions = [
    "Bank Central Asia (BCA)",
    "Bank Negara Indonesia (BNI)",
    "Bank Rakyat Indonesia (BRI)",
    "Bank Mandiri",
    "CIMB Niaga",
    "Bank Danamon",
    "Bank Permata",
    "OCBC NISP",
    "Maybank Indonesia",
    "Bank Tabungan Negara (BTN)",
    "Bank Tabungan Pensiunan Nasional (BTPN)",
    "Bank Mega",
    "Bank Bukopin",
    "Commonwealth Bank",
    "Bank Sinarmas",
    "United Overseas Bank (UOB)",
    "Bank DKI",
    "Bank Jabar Banten (BJB)",
    "Bank Jatim",
    "Lainnya"
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <Building className="mr-3 h-5 w-5 text-blue-600" />
        5. Informasi Bank
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="bankName">Nama Bank *</Label>
          <Select value={formData.bankName} onValueChange={(value) => updateFormData({ bankName: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Bank" />
            </SelectTrigger>
            <SelectContent>
              {bankOptions.map((bank) => (
                <SelectItem key={bank} value={bank}>
                  {bank}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="accountNumber">Nomor Rekening *</Label>
          <Input
            id="accountNumber"
            value={formData.accountNumber}
            onChange={(e) => updateFormData({ accountNumber: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="accountHolder">Nama Penerima *</Label>
          <Input
            id="accountHolder"
            value={formData.accountHolder}
            onChange={(e) => updateFormData({ accountHolder: e.target.value })}
            required
          />
        </div>
      </div>
    </div>
  );
}
