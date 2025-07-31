import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFormContext } from '@/lib/form-context';

export function EducationInfoSection() {
  const { formData, updateFormData } = useFormContext();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <GraduationCap className="mr-3 h-5 w-5 text-blue-600" />
        3. Pendidikan
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="educationLevel">Tingkat Pendidikan *</Label>
          <Select value={formData.educationLevel} onValueChange={(value) => updateFormData({ educationLevel: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Tingkat Pendidikan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="SD">SD</SelectItem>
              <SelectItem value="SMP">SMP</SelectItem>
              <SelectItem value="SMA/SMK">SMA/SMK</SelectItem>
              <SelectItem value="D1">D1</SelectItem>
              <SelectItem value="D2">D2</SelectItem>
              <SelectItem value="D3">D3</SelectItem>
              <SelectItem value="S1">S1</SelectItem>
              <SelectItem value="S2">S2</SelectItem>
              <SelectItem value="S3">S3</SelectItem>
              <SelectItem value="Lainnya">Lainnya</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="md:col-span-2">
          <Label htmlFor="schoolName">Nama Sekolah *</Label>
          <Input
            id="schoolName"
            value={formData.schoolName}
            onChange={(e) => updateFormData({ schoolName: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="major">Jurusan</Label>
          <Input
            id="major"
            value={formData.major}
            onChange={(e) => updateFormData({ major: e.target.value })}
          />
        </div>
        
        <div>
          <Label htmlFor="entryYear">Tahun Masuk *</Label>
          <Input
            id="entryYear"
            type="number"
            value={formData.entryYear}
            onChange={(e) => updateFormData({ entryYear: parseInt(e.target.value) || new Date().getFullYear() })}
            min="1950"
            max="2030"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="graduationYear">Tahun Lulus *</Label>
          <Input
            id="graduationYear"
            type="number"
            value={formData.graduationYear}
            onChange={(e) => updateFormData({ graduationYear: parseInt(e.target.value) || new Date().getFullYear() })}
            min="1950"
            max="2030"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="gpa">IPK</Label>
          <Input
            id="gpa"
            value={formData.gpa}
            onChange={(e) => updateFormData({ gpa: e.target.value })}
            step="0.01"
            min="0"
            max="4"
          />
        </div>
      </div>
    </div>
  );
}
