import { IFormRequest } from '@/entities/form';

export interface IFormContextType {
  formData: IFormRequest['OutPut'] | null;
  updateFormData: (newData: IFormRequest['OutPut']) => void;
  currentStep: number;
  maxVisitedStep: number;
  goToNextStep: () => void;
  goToPrevStep: () => void;
}
