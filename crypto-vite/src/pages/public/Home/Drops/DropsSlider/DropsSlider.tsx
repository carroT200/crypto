import { Swiper, SwiperSlide } from 'swiper/react';

import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

import styles from './DropsSlider.module.css';

import 'swiper/css';
import 'swiper/css/pagination';

const DropsSlider = () => (
  <Swiper
    direction={'vertical'}
    slidesPerView={1}
    spaceBetween={50}
    loop={true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    mousewheel={false}
    pagination={{
      clickable: true,
    }}
    modules={[Mousewheel, Pagination, Autoplay]}
    className={styles.swiper}
  >
    <SwiperSlide className={styles.slide}>
      Invent your own NFT and sell it for others!
    </SwiperSlide>
    <SwiperSlide className={styles.slide}>
      Discover, and sell Extraordinary NFTs!
    </SwiperSlide>
    <SwiperSlide className={styles.slide}>
      Wide range of anything you want! Just try it
    </SwiperSlide>
  </Swiper>
);

export default DropsSlider;
