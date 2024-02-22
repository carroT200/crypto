import classNames from 'classnames';

import styles from './Input.module.css';

interface IInputProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  text: string;
}

const Input = ({ className, icon, text, ...props }: IInputProps) => {
  return (
    <div className={classNames(styles.input__wrapper, className)} {...props}>
      <label htmlFor={text} className={styles.label}>
        {text}
      </label>
      <div className={styles.wrapper}>
        {icon && <div className={styles.icon__wrapper}>{icon}</div>}
        <input className={styles.input} type="text" id={text} />
      </div>
    </div>
  );
};

export default Input;
