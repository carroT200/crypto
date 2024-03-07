import Header from '../../../components/Header/Header';

import Drops from './Drops/Drops';

import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Drops />
    </div>
  );
};

export default Home;
