import { CheckBox, Select } from '@/shared/ui';

function FormPage() {
  return (
    <div>
      <CheckBox>sss</CheckBox>
      <Select
        options={[
          { label: 'test', value: 1 },
          { label: 'test2', value: 2 },
        ]}
      />
    </div>
  );
}

export default FormPage;
