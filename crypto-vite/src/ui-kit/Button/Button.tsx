import classNames from 'classnames';

import styles from './Button.module.css';
import { forwardRef } from 'react';

interface IButtomProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = forwardRef<HTMLButtonElement, IButtomProps>(
  ({ className, icon, children, variant = 'primary', ...props }, ref) => {
    return (
      <div
        className={classNames(
          styles.button__wrapper,
          {
            [styles['primary--button']]: variant === 'primary',
            [styles['secondary--button']]: variant === 'secondary',
          },
          className
        )}
        {...props}
      >
        <button ref={ref} className={styles.button}>
          {children}
          {icon && <div className={styles.icon}>{icon}</div>}
        </button>
      </div>
    );
  }
);

export default Button;
