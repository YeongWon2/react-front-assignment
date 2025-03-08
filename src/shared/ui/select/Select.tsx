import { ChangeEvent, useCallback } from 'react';

import styles from './Select.module.css';

interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  options: Option[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

function Select({
  options,
  value = '',
  onChange,
  placeholder = '선택하세요',
  disabled = false,
  className = '',
}: SelectProps) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange],
  );

  return (
    <div className={className}>
      <select value={value} onChange={handleChange} disabled={disabled} className={styles.selectContainer}>
        {placeholder && !value && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
