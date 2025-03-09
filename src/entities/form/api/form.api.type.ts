import { TFormDTO, TOutPutDTO } from '@/entities/form';

export interface IFormResponse {
  Cleaning: TFormDTO;
  EnglishLesson: TFormDTO;
}

export interface IFormRequest {
  OutPut: TOutPutDTO;
}
