// import { Navigation, Scrollbar } from 'swiper/modules';

// import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/navigation';

// import styles from './Swiper.module.css';

// interface ISwiperComponentProps extends SwiperProps {
//   cards?: any[];
// }

// const SwiperComponent = ({ cards, ...props }: ISwiperComponentProps) => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Scrollbar]}
//       spaceBetween={20}
//       slidesPerView={2}
//       navigation
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//       {...props}
//     >
//       {cards?.map((item) => (
//         <SwiperSlide key={item.img}>
//           {({ isActive }) =>
//             isActive && (
//               <div className={styles.slider__wrapper}>
//                 <img src={item.img} className={styles.img} alt="" />
//                 <p className={styles.name}>{item.name}</p>
//                 <p className={styles.price}>{item.price}</p>
//                 <p className={styles.date}>{item.date}</p>
//               </div>
//             )
//           }
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default SwiperComponent;
