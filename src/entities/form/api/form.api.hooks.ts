import { useQuery } from '@tanstack/react-query';

import { fetchCleanForm, fetchEnglishLessonForm } from '@/entities/form/api/form.api.ts';

export function useCleaningForm() {
  const { data, isLoading } = useQuery({ queryKey: ['fetchCleanForm'], queryFn: fetchCleanForm });

  return { data, isLoading };
}

export function useEnglishLessonForm() {
  const { data, isLoading } = useQuery({
    queryKey: ['fetchEnglishLessonForm'],
    queryFn: fetchEnglishLessonForm,
  });

  return { data, isLoading };
}
