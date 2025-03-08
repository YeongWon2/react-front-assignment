import { FormProvider } from '@/app/provider/form';

import { MultiFormWrapper } from '@/features/form';

import { CheckBox, Select } from '@/shared/ui';

import styles from './cleaning.module.css';

function CleaningFormPage() {
  return (
    <FormProvider>
      <MultiFormWrapper totalSteps={10}>
        <div className={styles.formElements}>
          <Select
            options={[
              { label: 'test', value: 1 },
              { label: 'test2', value: 2 },
            ]}
          />

          <CheckBox>sss</CheckBox>
        </div>
      </MultiFormWrapper>
    </FormProvider>
  );
}

export default CleaningFormPage;
