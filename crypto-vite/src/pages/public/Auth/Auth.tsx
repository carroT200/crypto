import Input from '@src/ui-kit/Input/Input';
import Button from '@src/ui-kit/Button/Button';

import styles from './Auth.module.css';
import { NavLink } from 'react-router-dom';

const Auth = () => {
  return (
    <div className={styles.auth}>
      <Input placeholder="Number" />
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button variant="secondary">Enter </Button>

      <NavLink to="/login">I already have a account</NavLink>
    </div>
  );
};

export default Auth;
