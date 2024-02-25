import Input from '@src/ui-kit/Input/Input';
import Button from '@src/ui-kit/Button/Button';

import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className={styles.login}>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button variant="secondary">Log in</Button>
      <NavLink to="/auth">Wanna make a new account?</NavLink>
    </div>
  );
};

export default Login;
