import { useParams } from 'react-router-dom';

import { CleaningFormPage, EnglishTutoringFormPage } from '@/pages';

import { FormProvider } from '@/app/provider/form';

function FormLayout() {
  const { formId } = useParams();

  return (
    <FormProvider>
      {formId === '1' && <CleaningFormPage />}
      {formId === '2' && <EnglishTutoringFormPage />}
    </FormProvider>
  );
}

export default FormLayout;
