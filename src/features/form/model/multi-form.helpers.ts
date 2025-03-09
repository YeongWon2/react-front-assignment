import { TFormDTO } from '@/entities/form';





//체크박스 항목이 유효한지 확인
export const isCheckboxValid = (value: string | undefined): boolean => {
  if (!value) return false;
  return value.split(',').filter(Boolean).length > 0;
};

// 셀렉트 항목이 유효한지 확인
export const isSelectValid = (value: string | undefined): boolean => {
  return !!value;
};

// 폼 항목이 유효한지 확인
export const isItemValid = (item: TFormDTO['items'][0], value: string | undefined): boolean => {
  if (!value) return false;

  if (item.formType === 'checkbox') {
    return isCheckboxValid(value);
  }

  return isSelectValid(value);
};

// 현재 단계의 항목이 유효한지 확인
export const isCurrentItemValid = (
  currentItem: TFormDTO['items'][0] | undefined,
  formValues: Record<number, string>,
): boolean => {
  if (!currentItem) return false;
  return isItemValid(currentItem, formValues[currentItem.itemId]);
};

// 모든 항목이 유효한지 확인
export const areAllItemsValid = (items: TFormDTO['items'], formValues: Record<number, string>): boolean => {
  return items.every((item) => isItemValid(item, formValues[item.itemId]));
};
