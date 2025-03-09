import { TFormDTO, TOutPutDTO } from '@/entities/form';

export interface IFormResponse {
  Cleaning: TFormDTO;
  EnglishTutoring: TFormDTO;
}

export interface IFormRequest {
  OutPut: TOutPutDTO;
}
