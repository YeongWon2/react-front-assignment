import { ChangeEvent, ReactNode } from 'react';

import { CheckIcon } from '@/shared/ui';

import styles from './Checkbox.module.css';

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
  className?: string;
  children?: ReactNode;
}

function Checkbox({ children, checked, defaultChecked, onChange, id, name, className = '' }: CheckboxProps) {
  return (
    <label className={`${styles.checkboxContainer} ${className}`}>
      <input
        type="checkbox"
        className={styles.hiddenCheckbox}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        id={id}
        name={name}
      />
      <div className={styles.customCheckbox}>
        <CheckIcon />
      </div>
      {children}
    </label>
  );
}

export default Checkbox;
