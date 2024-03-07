import classNames from 'classnames';

import Button from '@src/ui-kit/Button/Button';
import DropsSlider from './DropsSlider/DropsSlider';

import Medusa from '@assets/images/medusa-bg.png';
import ButtonIcon from '@assets/icons/explore.svg?react';

import styles from './Drops.module.css';

const Advantages = () => (
  <div className={styles.advantages__wrapper}>
    <div>
      <p className={styles.advantage}>70K+</p>
      <p className={styles.advantage__title}>Artwork</p>
    </div>
    <div>
      <p className={styles.advantage}>160K+</p>
      <p className={styles.advantage__title}>Auction</p>
    </div>
    <div>
      <p className={styles.advantage}>20K+</p>
      <p className={styles.advantage__title}>Artist</p>
    </div>
  </div>
);

const Drops = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classNames(styles.wrapper, className)} {...props}>
      <div className={styles.photo__wrapper}>
        <img src={Medusa} alt="" className={styles.medusa} />
        <p className={styles.nft}>NFT</p>
      </div>
      <div className={styles.swiper__wrapper}>
        <DropsSlider />
        <Button
          icon={<ButtonIcon />}
          variant="secondary"
          className={styles.button}
        >
          Explore
        </Button>
        <Advantages />
      </div>
    </div>
  );
};

export default Drops;
