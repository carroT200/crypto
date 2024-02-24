import { useState, forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import Eye from '../../assets/icons/Eye.svg?react';
import Eyeoff from '../../assets/icons/Eye.svg?react';

import styles from './Input.module.css';

interface IInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  invalid?: boolean;
  value?: string;
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ value, placeholder, type, invalid, className, id, ...props }, ref) => {
    const [isHiding, setIsHiding] = useState<boolean>(true);

    const inputType = useMemo<React.HTMLInputTypeAttribute | undefined>(() => {
      if (type === 'password') {
        if (isHiding) return 'password';
        return 'text';
      }
      return type;
    }, [type, isHiding]);

    const onToggleHide = () => {
      setIsHiding((prev) => !prev);
    };
    return (
      <div
        className={classNames(
          styles.input__wrapper,
          {
            [styles['invalid--input']]: invalid,
          },
          className
        )}
      >
        <label className={styles.label} htmlFor={id}>
          {placeholder}
        </label>
        <input
          id={id}
          type={inputType}
          value={value}
          className={styles.input}
          ref={ref}
          {...props}
        />
        <button onClick={onToggleHide} className={styles.icon}>
          {inputType === 'password' ? <Eye /> : <Eyeoff />}
        </button>
      </div>
    );
  }
);

export default Input;
