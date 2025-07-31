import React from 'react';
import { User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useFormContext } from '@/lib/form-context';

export function PersonalInfoSection() {
  const { formData, updateFormData } = useFormContext();

  const calculateAge = (birthDate: string) => {
    if (!birthDate) return 0;
    
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const handleBirthDateChange = (value: string) => {
    const age = calculateAge(value);
    updateFormData({ birthDate: value, age });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <User className="mr-3 h-5 w-5 text-blue-600" />
        1. Informasi Diri
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="opsId">OpsID *</Label>
          <Input
            id="opsId"
            value={formData.opsId}
            onChange={(e) => updateFormData({ opsId: e.target.value })}
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <Label htmlFor="fullName">Nama Lengkap *</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => updateFormData({ fullName: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="nik">NIK KTP (16 digit) *</Label>
          <Input
            id="nik"
            value={formData.nik}
            onChange={(e) => updateFormData({ nik: e.target.value })}
            maxLength={16}
            pattern="[0-9]{16}"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="birthPlace">Tempat Lahir *</Label>
          <Input
            id="birthPlace"
            value={formData.birthPlace}
            onChange={(e) => updateFormData({ birthPlace: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="birthDate">Tanggal Lahir *</Label>
          <Input
            id="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={(e) => handleBirthDateChange(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="age">Umur</Label>
          <Input
            id="age"
            type="number"
            value={formData.age}
            readOnly
            className="bg-gray-50"
          />
        </div>
        
        <div>
          <Label htmlFor="gender">Jenis Kelamin *</Label>
          <Select value={formData.gender} onValueChange={(value) => updateFormData({ gender: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Jenis Kelamin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Laki-laki">Laki-laki</SelectItem>
              <SelectItem value="Perempuan">Perempuan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="md:col-span-2 lg:col-span-3">
          <Label htmlFor="ktpAddress">Alamat Lengkap Sesuai KTP ASLI *</Label>
          <Textarea
            id="ktpAddress"
            value={formData.ktpAddress}
            onChange={(e) => updateFormData({ ktpAddress: e.target.value })}
            rows={3}
            required
          />
        </div>
        
        <div className="md:col-span-2 lg:col-span-3">
          <Label htmlFor="currentAddress">Alamat Domisili Tempat Tinggal Sekarang *</Label>
          <Textarea
            id="currentAddress"
            value={formData.currentAddress}
            onChange={(e) => updateFormData({ currentAddress: e.target.value })}
            rows={3}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="rtRw">RT/RW *</Label>
          <Input
            id="rtRw"
            value={formData.rtRw}
            onChange={(e) => updateFormData({ rtRw: e.target.value })}
            placeholder="001/002"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="houseNumber">No Rumah *</Label>
          <Input
            id="houseNumber"
            value={formData.houseNumber}
            onChange={(e) => updateFormData({ houseNumber: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="kelurahan">Kelurahan *</Label>
          <Input
            id="kelurahan"
            value={formData.kelurahan}
            onChange={(e) => updateFormData({ kelurahan: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="kecamatan">Kecamatan *</Label>
          <Input
            id="kecamatan"
            value={formData.kecamatan}
            onChange={(e) => updateFormData({ kecamatan: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="city">Kota *</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="postalCode">Kode Pos (5 digit) *</Label>
          <Input
            id="postalCode"
            value={formData.postalCode}
            onChange={(e) => updateFormData({ postalCode: e.target.value })}
            maxLength={5}
            pattern="[0-9]{5}"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="religion">Agama *</Label>
          <Select value={formData.religion} onValueChange={(value) => updateFormData({ religion: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Agama" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Islam">Islam</SelectItem>
              <SelectItem value="Kristen">Kristen</SelectItem>
              <SelectItem value="Katolik">Katolik</SelectItem>
              <SelectItem value="Hindu">Hindu</SelectItem>
              <SelectItem value="Buddha">Buddha</SelectItem>
              <SelectItem value="Konghucu">Konghucu</SelectItem>
              <SelectItem value="Lainnya">Lainnya</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="maritalStatus">Status Perkawinan *</Label>
          <Select value={formData.maritalStatus} onValueChange={(value) => updateFormData({ maritalStatus: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Belum Menikah">Belum Menikah</SelectItem>
              <SelectItem value="Menikah">Menikah</SelectItem>
              <SelectItem value="Cerai Hidup">Cerai Hidup</SelectItem>
              <SelectItem value="Cerai Mati">Cerai Mati</SelectItem>
              <SelectItem value="Lainnya">Lainnya</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="citizenship">Kewarganegaraan *</Label>
          <Input
            id="citizenship"
            value={formData.citizenship}
            onChange={(e) => updateFormData({ citizenship: e.target.value })}
            required
          />
        </div>
      </div>
    </div>
  );
}
