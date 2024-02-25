import Header from '../../../components/Header/Header';

import classNames from 'classnames';

import styles from './Profle.module.css';

const Profile = () => {
  return (
    <div className={classNames(styles.profile, classNames)}>
      <Header />
    </div>
  );
};

export default Profile;
