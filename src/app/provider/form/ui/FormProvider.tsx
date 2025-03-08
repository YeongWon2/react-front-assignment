import { ReactNode, useCallback, useState } from 'react';

import { FormContext } from '@/app/provider/form';

import { IFormRequest } from '@/entities/form';

interface IFormProviderProps {
  children: ReactNode;
}

function FormProvider({ children }: IFormProviderProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<IFormRequest['OutPut'] | null>(null);

  const updateFormData = useCallback((newData: IFormRequest['OutPut']) => {
    setFormData(newData);
  }, []);

  const goToNextStep = useCallback(() => {
    setCurrentStep((prev) => prev + 1);
  }, []);

  const goToPrevStep = useCallback(() => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        goToNextStep,
        goToPrevStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
