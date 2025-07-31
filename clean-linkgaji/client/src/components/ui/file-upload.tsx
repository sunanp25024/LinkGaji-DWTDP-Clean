import React, { useCallback, useState } from 'react';
import { Upload, CheckCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  accept?: string;
  maxSize?: number;
  required?: boolean;
  label: string;
  currentFile?: File | null;
}

export function FileUpload({
  onFileSelect,
  accept = 'image/*',
  maxSize = 5 * 1024 * 1024, // 5MB
  required = false,
  label,
  currentFile
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File) => {
    if (file.size > maxSize) {
      return 'File terlalu besar. Maksimal 5MB.';
    }
    
    if (!file.type.startsWith('image/')) {
      return 'File harus berupa gambar (JPG, PNG).';
    }
    
    return null;
  };

  const handleFileSelect = useCallback((file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setError(null);
    onFileSelect(file);
  }, [onFileSelect, maxSize]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const removeFile = () => {
    onFileSelect(null);
    setError(null);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer",
          isDragOver
            ? "border-blue-500 bg-blue-50"
            : currentFile
            ? "border-green-500 bg-green-50"
            : error
            ? "border-red-500 bg-red-50"
            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          accept={accept}
          onChange={handleInputChange}
          className="hidden"
          id={`file-${label}`}
        />
        
        <label htmlFor={`file-${label}`} className="cursor-pointer">
          {currentFile ? (
            <div className="space-y-2">
              <CheckCircle className="mx-auto h-8 w-8 text-green-600" />
              <p className="text-sm font-medium text-green-600">File berhasil dipilih</p>
              <p className="text-xs text-gray-500">{currentFile.name}</p>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  removeFile();
                }}
                className="inline-flex items-center text-xs text-red-600 hover:text-red-800"
              >
                <X className="h-3 w-3 mr-1" />
                Hapus
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <Upload className="mx-auto h-8 w-8 text-gray-400" />
              <p className="text-sm text-gray-600">
                Klik atau drag & drop {label.toLowerCase()} di sini
              </p>
              <p className="text-xs text-gray-500">Format: JPG, PNG (Maks. 5MB)</p>
            </div>
          )}
        </label>
      </div>
      
      {error && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}
