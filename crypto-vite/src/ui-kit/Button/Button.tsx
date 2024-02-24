import classNames from 'classnames';

import styles from './Button.module.css';
import { forwardRef } from 'react';

interface IButtomProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const Button = forwardRef<HTMLButtonElement, IButtomProps>(
  ({ className, icon, children, variant = 'secondary', ...props }, ref) => {
    return (
      <button
        ref={ref}
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
        {children}
        {icon && <div className={styles.icon}>{icon}</div>}
      </button>
    );
  }
);

export default Button;
