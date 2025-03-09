import { IFormResponse } from '@/entities/form';

import { apiClient } from '@/shared/api';

export const fetchCleanForm = async () => {
  const response = await apiClient.get<IFormResponse['Cleaning']>('/data/exam/mock/input_clean.json');
  return response.data;
};

export const fetchEnglishLessonForm = async () => {
  const response = await apiClient.get<IFormResponse['EnglishLesson']>('/data/exam/mock/input_lesson.json');
  return response.data;
};
