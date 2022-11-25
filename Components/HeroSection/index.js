import React, { useState } from 'react';
import hero_banner from '../../assests/hero_banner.png';
import styles from './HeroSection.module.css';
import playButton from '../../assests/Icons/Play.png';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
//hero section
const HeroSection = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <Container>
        <div className={styles.heroText}>
          <div className={styles.heading_one}>{data[0].main_title}</div>
          <div className={styles.heading_two}>{data[0].main_title}</div>
          <div className={styles.heading_three}>{data[0].Description}</div>
          <div className={styles.hero_button}>
            <Image src={playButton} alt="play button" height={32} width={32} />
            <Link href="/video">
              <div className={styles.watchBtn} onClick={() => setOpen(true)}>
                <a style={{ textDecoration: "none", color: 'inherit' }}>
                  WATCH NOW
                </a>
              </div>
            </Link>
          </div>
        </div>
      </Container>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      /> */}
    </div>
  );
};

export default HeroSection;
