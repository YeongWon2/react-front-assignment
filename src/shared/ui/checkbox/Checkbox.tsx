import { ChangeEvent, ReactNode } from 'react';

import { CheckIcon } from '@/shared/ui';

import styles from './Checkbox.module.css';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

function Checkbox({ children, checked = false, onChange, className = '' }: CheckboxProps) {
  return (
    <label className={`${styles.checkboxContainer} ${className}`}>
      <input type="checkbox" className={styles.hiddenCheckbox} checked={checked} onChange={onChange} />
      <div className={styles.customCheckbox}>
        <CheckIcon />
      </div>
      {children}
    </label>
  );
}

export default Checkbox;
