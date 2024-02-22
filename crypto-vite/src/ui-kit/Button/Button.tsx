import classNames from 'classnames';

import styles from './Button.module.css';

interface IButtomProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  text: string;
  variant?: 'plain' | 'purple';
}

const Button = ({
  className,
  icon,
  text,
  variant = 'purple',
  ...props
}: IButtomProps) => {
  return (
    <div
      className={classNames(
        styles.button__wrapper,
        {
          [styles['plain--button']]: variant === 'plain',
          [styles['purple--button']]: variant === 'purple',
        },
        className
      )}
      {...props}
    >
      <button className={styles.button}>{text}</button>
      {icon && <div className={styles.icon__wrapper}>{icon}</div>}
    </div>
  );
};

export default Button;
