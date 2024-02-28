import classNames from 'classnames';

import { forwardRef } from 'react';

import { Combobox as ComboboxPrimitive } from '@headlessui/react';

import styles from './ComboboxInput.module.css';

interface IComboboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  id?: string;
  className?: string;
  invalid?: boolean;
  name?: string;
  icon: React.ReactNode;
  open?: boolean;
  displayValue?: (item: string) => string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Combobox = forwardRef<HTMLInputElement, IComboboxProps>(
  (
    {
      type,
      placeholder,
      id,
      className,
      invalid,
      displayValue,
      onChange,
      icon,
      open,
      ...props
    },
    ref
  ) => (
    <div
      className={classNames(
        styles.input,
        {
          [styles['input--invalid']]: invalid,
        },
        className
      )}
    >
      <div className={styles.input__content}>
        <div className={styles.input__container}>
          <ComboboxPrimitive.Input
            {...props}
            type={type}
            id={id}
            className={classNames(styles.input__field)}
            displayValue={displayValue}
            onChange={onChange}
            ref={ref}
          />
          <label htmlFor={id} className={styles.input__label}>
            {placeholder}
          </label>
        </div>
        {icon && (
          <ComboboxPrimitive.Button
            className={classNames(styles.input__icon, {
              [styles['input__icon--opened']]: open,
            })}
          >
            {icon}
          </ComboboxPrimitive.Button>
        )}
      </div>
    </div>
  )
);

export default Combobox;
