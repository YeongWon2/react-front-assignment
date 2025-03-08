import { TCleaningDTO, TEnglishTutoringDTO, TOutPutDTO } from '@/entities/form';

export interface IFormResponse {
  Cleaning: TCleaningDTO;
  EnglishTutoring: TEnglishTutoringDTO;
}

export interface IFormRequest {
  OutPut: TOutPutDTO;
}
