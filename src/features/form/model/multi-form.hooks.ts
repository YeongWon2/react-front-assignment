import { useCallback, useEffect, useState } from 'react';

import { areAllItemsValid, isCurrentItemValid } from '@/features/form';

import { TFormDTO, TOutPutDTO } from '@/entities/form';

export const useMultiForm = (formData: TFormDTO) => {
  // 현재 단계 상태
  const [currentStep, setCurrentStep] = useState(1);
  // 폼 입력값 상태 (itemId: value) - 내부적으로는 ID를 저장
  const [formValues, setFormValues] = useState<Record<number, string>>({});
  // 총 단계 수 계산 (items 배열 길이)
  const totalSteps = formData.items.length;
  // 현재 단계의 항목 정보
  const currentItem = formData.items[currentStep - 1];

  // 다음 단계로 이동하는 함수
  const goToNextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  }, [totalSteps]);

  // 이전 단계로 이동하는 함수
  const goToPrevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  // 특정 단계로 이동하는 함수
  const setStep = useCallback(
    (step: number) => {
      if (step >= 1 && step <= totalSteps) {
        setCurrentStep(step);
      }
    },
    [totalSteps],
  );

  // 현재 단계가 유효 범위를 벗어나지 않도록 조정
  useEffect(() => {
    if (currentStep > totalSteps) {
      setStep(totalSteps);
    } else if (currentStep < 1) {
      setStep(1);
    }
  }, [currentStep, totalSteps, setStep]);

  // formData가 변경될 때 초기값 설정
  useEffect(() => {
    const initialValues: Record<number, string> = {};
    formData.items.forEach((item) => {
      initialValues[item.itemId] = '';
    });

    setFormValues(initialValues);
    setCurrentStep(1);
  }, [formData]);

  // 체크박스 변경 핸들러 (ID 값 저장)
  const handleCheckboxChange = useCallback((itemId: number, optionId: number, checked: boolean) => {
    setFormValues((prev) => {
      const currentValues = prev[itemId] ? prev[itemId].split(',').filter(Boolean) : [];
      let newValues: string[];

      if (checked) {
        newValues = [...currentValues, optionId.toString()];
      } else {
        newValues = currentValues.filter((id) => id !== optionId.toString());
      }

      return {
        ...prev,
        [itemId]: newValues.join(','),
      };
    });
  }, []);

  // 셀렉트 박스 변경 핸들러 (ID 값 저장)
  const handleSelectChange = useCallback((itemId: number, value: string | number) => {
    setFormValues((prev) => ({
      ...prev,
      [itemId]: value.toString(),
    }));
  }, []);

  // 현재 항목이 유효한지 확인
  const validateCurrentItem = useCallback(() => {
    return isCurrentItemValid(currentItem, formValues);
  }, [currentItem, formValues]);

  // 모든 항목이 유효한지 확인
  const validateAllItems = useCallback(() => {
    return areAllItemsValid(formData.items, formValues);
  }, [formData.items, formValues]);

  // ID를 텍스트로 변환하는 함수
  const convertIdsToTexts = useCallback(
    (itemId: number, idsString: string): string => {
      // 항목 찾기
      const item = formData.items.find((item) => item.itemId === itemId);
      if (!item) return idsString;

      // ID 목록
      const ids = idsString.split(',').filter(Boolean);

      // 체크박스인 경우: 여러 ID를 텍스트로 변환
      if (item.formType === 'checkbox') {
        const texts = ids.map((id) => {
          const option = item.options.find((opt) => opt.id.toString() === id);
          return option ? option.text : id;
        });
        return texts.join(',');
      }

      // 셀렉트인 경우: 단일 ID를 텍스트로 변환
      const option = item.options.find((opt) => opt.id.toString() === idsString);
      return option ? option.text : idsString;
    },
    [formData.items],
  );

  // 제출용 DTO로 변환하는 함수 (ID를 텍스트로 변환)
  const getOutputData = useCallback((): TOutPutDTO => {
    return {
      id: formData.formId,
      items: Object.entries(formValues)
        .filter(([_, value]) => value) // 값이 있는 항목만 포함
        .map(([itemId, answer]) => ({
          id: parseInt(itemId),
          answer: convertIdsToTexts(parseInt(itemId), answer),
        })),
    };
  }, [formData.formId, formValues, convertIdsToTexts]);

  return {
    currentStep,
    totalSteps,
    currentItem,
    formValues,
    goToNextStep,
    goToPrevStep,
    setStep,
    handleCheckboxChange,
    handleSelectChange,
    validateCurrentItem,
    validateAllItems,
    getOutputData,
  };
};
