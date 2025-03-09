export type TFormDTO = {
  formId: number;
  title: string;
  items: {
    itemId: number;
    title: string;
    formType: 'checkbox' | 'select';
    options: {
      id: number;
      text: string;
    }[];
  }[];
};

export type TOutPutDTO = {
  id: number;
  items: {
    id: number;
    answer: string;
  }[];
};
