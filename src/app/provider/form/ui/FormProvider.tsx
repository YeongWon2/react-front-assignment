import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { FormContext } from '@/app/provider/form';

import { IFormRequest } from '@/entities/form';

interface IFormProviderProps {
  children: ReactNode;
}

function FormProvider({ children }: IFormProviderProps) {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const stepParam = searchParams.get('step');
  const currentStep = stepParam ? parseInt(stepParam, 10) : 1;

  const [formData, setFormData] = useState<IFormRequest['OutPut'] | null>(null);
  const [maxVisitedStep, setMaxVisitedStep] = useState<number>(1);

  const updateFormData = useCallback((newData: IFormRequest['OutPut']) => {
    setFormData(newData);
  }, []);

  // 다음 스텝으로 이동
  const goToNextStep = useCallback(() => {
    if (!id) return;
    navigate(`/form/${id}?step=${currentStep + 1}`);
  }, [currentStep, id, navigate]);

  // 이전 스텝으로 이동
  const goToPrevStep = useCallback(() => {
    if (!id || currentStep <= 1) return;
    navigate(`/form/${id}?step=${currentStep - 1}`);
  }, [currentStep, id, navigate]);

  useEffect(() => {
    if (!currentStep) return;
    if (currentStep > maxVisitedStep) {
      setMaxVisitedStep(currentStep);
    }
  }, [currentStep, maxVisitedStep]);

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        maxVisitedStep,
        goToNextStep,
        goToPrevStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
