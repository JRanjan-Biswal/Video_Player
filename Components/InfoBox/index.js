import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from './InfoBox.module.css';
import playBtn from '../../assests/Icons/Vector.png';
import closeBtn from '../../assests/Icons/Close.png';
import modelDesktopImg from '../../assests/Model_desktop.png';
import modelMobileImg from '../../assests/model_mobile.png';
import Image from 'next/image';
import learnMoreBtn from '../../assests/learnMore.png';
const InfoBox = () => {
  const [open, setOpen] = useState(false);
  const [mobileModel, setMobileModel] = useState(false);
  const [desktopModel, setDesktopModel] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 767) {
      setDesktopModel(true);
    } else if (window.innerWidth < 700) {
      setMobileModel(true);
    }
  }, [desktopModel, mobileModel]);

  const increaseHeightAndWidth = (e) => {
    const infoStyle = e.currentTarget.parentNode.firstChild.firstChild.style;
    infoStyle.opacity = 1
    // console.log(infoStyle)
  }
  const buttonClicked = (e) => {
    if (open) {
      const infoStyle = e.currentTarget.parentNode.firstChild.style;
      console.log('close here', infoStyle)
      infoStyle.opacity = "0"
      setOpen(false)
    } else {
      const infoStyle = e.currentTarget.parentNode.firstChild.firstChild.style;
      infoStyle.opacity = "1"
      setOpen(true)
    }
  }
  return (
    <Container>
      <div className={styles.infoBoxMain}>
        <div className={styles.infoBox}>
          {/* {open ? ( */}
          <div className={styles.infoBoxSub}>
            <div className={styles.infoDescBox}>
              <div className={styles.infoDescCircle}></div>
              <div className={styles.modelImage}>
                {mobileModel && (
                  <Image
                    src={modelMobileImg}
                    width={350}
                    height={245}
                    alt="model Image"
                  ></Image>
                )}
                {desktopModel && (
                  <Image
                    src={modelDesktopImg}
                    width={261}
                    height={233}
                    alt="model Image"
                  ></Image>
                )}
              </div>
              <div className={styles.infoDescText}>
                <div>SPARSH is not your average OTT platform</div>
                <div>
                  Because we’re not an OTT platform. At All. <br></br>{' '}
                  <span className={styles.infoDesSubHead}>
                    {' '}
                    Before you moan, groan, and look away, take a quick
                    scroll. Choose your health over 30 minutes of show time.
                  </span>
                </div>
                <div>
                  <Image
                    src={learnMoreBtn}
                    height={56}
                    width={196}
                    alt="learn more"
                  ></Image>
                </div>
              </div>
            </div>
            {open &&
              <div onClick={(event) => buttonClicked(event)} style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div style={{position:"relative", top:"-0.7rem"}}>
                  <Image
                    src={closeBtn}
                    alt="play btn"
                    height={32}
                    width={32}
                  ></Image>
                </div>
                Close
              </div>

            }

          </div>
          {/* ) : ( */}
          {!open &&
            <div
              className={`${styles.infoBoxSub}`}
              onClick={(event) => buttonClicked(event)}
            >
              <div>
                <Image
                  src={playBtn}
                  alt="play btn"
                  height={32}
                  width={32}
                ></Image>
              </div>
              WHAT IS SPARSH?
            </div>
          }
          {/* )} */}
        </div>
      </div>
    </Container>
  );
};

export default InfoBox;
