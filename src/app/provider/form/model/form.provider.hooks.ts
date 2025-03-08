import { createContext, useContext } from 'react';

import { IFormContextType } from '@/app/provider/form';

const FormContext = createContext<IFormContextType | null>(null);

function useFormContext(): IFormContextType {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext는 FormProvider 내부에서만 사용할 수 있습니다.');
  }

  return context;
}

export { FormContext, useFormContext };
