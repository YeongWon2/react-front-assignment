import { useCallback } from 'react';

import { useMultiForm } from '@/features/form';

import { TFormDTO, TOutPutDTO } from '@/entities/form';

import { Button, CheckBox, Select } from '@/shared/ui';

import styles from './multi.form.module.css';

interface IMultiFormViewProps {
  formData: TFormDTO;
  onSubmit?: (values: TOutPutDTO) => void;
}

function MultiFormView({ formData, onSubmit }: IMultiFormViewProps) {
  const {
    currentStep,
    totalSteps,
    currentItem,
    formValues,
    goToNextStep,
    goToPrevStep,
    handleCheckboxChange,
    handleSelectChange,
    validateCurrentItem,
    validateAllItems,
    getOutputData,
  } = useMultiForm(formData);

  const handleNext = useCallback(() => {
    if (validateCurrentItem()) {
      goToNextStep();
    } else {
      alert('값을 입력해 주세요!');
    }
  }, [validateCurrentItem, goToNextStep]);

  const handleSubmit = useCallback(() => {
    if (validateAllItems()) {
      const outputData = getOutputData();

      if (onSubmit) {
        onSubmit(outputData);
      }
    } else {
      alert('값을 입력해 주세요!');
    }
  }, [validateAllItems, getOutputData, onSubmit]);

  if (formData.items.length === 0) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.formTitle}>{formData.title}</h2>
          <p className={styles.emptyMessage}>폼 항목이 없습니다.</p>
        </div>
      </div>
    );
  }

  if (!currentItem) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.formTitle}>{formData.title}</h2>
          <p className={styles.emptyMessage}>항목을 찾을 수 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.formTitle}>{formData.title}</h2>

        {/* 진행 상태 표시 */}
        <div className={styles.progressContainer}>
          <div className={styles.progressText}>
            {currentStep} / {totalSteps}
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
          </div>
        </div>

        {/* 현재 항목만 렌더링 */}
        <div className={styles.formItem}>
          <h3 className={styles.itemTitle}>{currentItem.title}</h3>

          {currentItem.formType === 'checkbox' && (
            <div className={styles.checkboxGroup}>
              {currentItem.options.map((option) => (
                <CheckBox
                  key={option.id}
                  checked={formValues[currentItem.itemId]?.split(',').includes(option.id.toString())}
                  onChange={(e) => handleCheckboxChange(currentItem.itemId, option.id, e.target.checked)}
                  className={styles.checkbox}
                >
                  {option.text}
                </CheckBox>
              ))}
            </div>
          )}

          {currentItem.formType === 'select' && (
            <Select
              options={currentItem.options.map((option) => ({
                value: option.id,
                label: option.text,
              }))}
              value={formValues[currentItem.itemId] || ''}
              onChange={(value) => handleSelectChange(currentItem.itemId, value)}
              className={styles.select}
            />
          )}
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button variant="outline" onClick={goToPrevStep} disabled={currentStep <= 1}>
          이전
        </Button>

        {currentStep === totalSteps ? (
          <Button variant="primary" onClick={handleSubmit}>
            제출하기
          </Button>
        ) : (
          <Button variant="primary" onClick={handleNext}>
            다음
          </Button>
        )}
      </div>
    </div>
  );
}

export default MultiFormView;
