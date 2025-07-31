import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormData, defaultFormData } from '@/types/form-data';

interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  isSubmitting: boolean;
  setIsSubmitting: (submitting: boolean) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        currentPage,
        setCurrentPage,
        isSubmitting,
        setIsSubmitting,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}
