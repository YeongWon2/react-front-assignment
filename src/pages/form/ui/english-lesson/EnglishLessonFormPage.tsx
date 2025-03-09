import { useCallback, useState } from 'react';

import { MultiFormView } from '@/features/form';

import { FormOutput, TOutPutDTO, useEnglishLessonForm } from '@/entities/form';

function EnglishLessonFormPage() {
  const { data, isLoading } = useEnglishLessonForm();

  const [submittedData, setSubmittedData] = useState<TOutPutDTO | null>(null);

  const handleFormSubmit = useCallback((data: TOutPutDTO) => {
    setSubmittedData(data);
  }, []);

  if (isLoading) {
    return null;
  }

  if (!data) {
    return <p>데이터가 없습니다.</p>;
  }

  return (
    <div>
      {!submittedData ? (
        <MultiFormView formData={data} onSubmit={handleFormSubmit} />
      ) : (
        <FormOutput output={submittedData} />
      )}
    </div>
  );
}

export default EnglishLessonFormPage;
