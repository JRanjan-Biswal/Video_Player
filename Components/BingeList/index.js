import React from 'react';
import styles from './BingeList.module.css';
import movie from '../../assests/box1.png';
import Image from 'next/image';
import playButton from '../../assests/play_button_white.png';
import { Container } from 'react-bootstrap';

const BingeList = () => {
  const N = 8;
  const arr = Array.from({ length: N }, (_, index) => index + 1);

  return (
    <>
      <Container>
        <div className={styles.bingeSection}>
          <h1 className={styles.bingeSectionHeading}>Your Binge List.</h1>
          <span className={styles.bingeSectionPara}>
            Drop that tub of caramel popcorn, only healthy snacks for this
            showing!
          </span>

          <div className={styles.flexContainer}>
            <div className={styles.listItemOverlay}>
              {arr.map((item) => {
                return (
                  <>
                    <div className={styles.posterMobile} key={item}>
                      <div className={`${styles.listItem} BingelistItem`}>
                        <div className={styles.bingeListImage}>
                          <Image
                            src={movie}
                            alt="movie card"
                            fill
                            // className={styles.listItemImage}
                            // objectFit={'cover'}
                          />
                        </div>

                        <div className={styles.movieTitleCard}>
                          <div className={styles.movieTitle}>
                            <p className={styles.movieMainTitle}>Symptoms</p>
                            <h3 className={styles.movieSubTitle}>
                              Bathroom Break Ke Baad
                            </h3>
                          </div>
                          <div className={styles.moviedesc}>
                            <p className={styles.listItemContent}>
                              The year is 1926, and Newt Scamander (Eddie
                              Redmayne) has just completed a global excursion to
                              find and document an extraordinary array of
                              magical creatures...
                            </p>
                            <div className={styles.listItemButton}>
                              <Image src={playButton} alt="play button" />
                              <span className={styles.listItemButtonText}>
                                Watch Now
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className={styles.box}></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BingeList;
