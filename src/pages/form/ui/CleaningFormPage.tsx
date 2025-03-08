import { CheckBox, Select } from '@/shared/ui';

function CleaningFormPage() {
  return (
    <div>
      <Select
        options={[
          { label: 'test', value: 1 },
          { label: 'test2', value: 2 },
        ]}
      />

      <CheckBox>sss</CheckBox>
    </div>
  );
}

export default CleaningFormPage;
