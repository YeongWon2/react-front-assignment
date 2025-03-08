import { ReactNode } from 'react';

import { useFormContext } from '@/app/provider/form';

import { Button } from '@/shared/ui';

import styles from './multi.form.module.css';

interface IMultiFormWrapperProps {
  children: ReactNode;
  totalSteps: number;
}

function MultiFormWrapper({ children, totalSteps }: IMultiFormWrapperProps) {
  const { currentStep, goToPrevStep, goToNextStep } = useFormContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>

      <div className={styles.buttonContainer}>
        <Button
          variant="outline"
          onClick={() => {
            console.log('이전 버튼 클릭');
            goToPrevStep();
          }}
          disabled={currentStep <= 1}
        >
          이전
        </Button>

        {currentStep === totalSteps ? (
          <Button
            variant="primary"
            onClick={() => {
              console.log('폼 제출!');
            }}
          >
            제출하기
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => {
              console.log('다음 버튼 클릭');
              goToNextStep();
            }}
          >
            다음
          </Button>
        )}
      </div>
    </div>
  );
}

export default MultiFormWrapper;
