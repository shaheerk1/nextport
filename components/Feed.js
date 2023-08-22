import styles from "../styles/Feed.module.css";
import Image from "next/image";
import pin from "../public/pin-mark.png";
import ecom from "../public/ecom.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Feed() {
  return (
    <div className={styles.container}>
      <div className={styles.showcase}>
        <div className={styles.showcaseTitle}>
          <div className={styles.pin}>
            <Image
              priority={true}
              className={styles.pinImg}
              src={pin}
              alt="icon"
            />
          </div>
          <div className={styles.pinText}>
            <h3>Pinned Items</h3>
          </div>
        </div>
        <div className={styles.showcaseContent}>
          <Swiper className={styles.mySwiper}>
            <SwiperSlide className={styles.swipeContent}>
              <Image
                priority={true}
                className={styles.cardImg}
                src={ecom}
                alt="card"
              />
              <div className={styles.cardText}>
                <h4>Ecom App</h4>
                <h6>goto</h6>
                <p className={styles.smallText}>-code-</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swipeContent}>Slide 2</SwiperSlide>
            <SwiperSlide className={styles.swipeContent}>Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.extLinks}>
        <h3>More Links...</h3>
        <div className={styles.linkBlock}>
          <p>Title</p>
          <p>code</p>
          <p>link http</p>
        </div>
        <div className={styles.linkBlock}>
          <p>Title</p>
          <p>code</p>
          <p>link http</p>
        </div>
      </div>
    </div>
  );
}

export default Feed;
