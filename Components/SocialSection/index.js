import React from 'react';
import styles from './SocialSection.module.css';
import Image from 'next/image';
import Frame_facebook from '../../assests/Frame_facebook.png';
import Frame_insta from '../../assests/Frame_insta.png';
import Frame_linkd from '../../assests/Frame_linkd.png';
import Frame_twitter from '../../assests/Frame_twitter.png';
import Frame_youtube from '../../assests/Frame_youtube.png';
import { Container } from 'react-bootstrap';
const SocialSection = () => {
  return (
    <>
      <Container>
        <div className={styles.socialSec}>
          <div className={styles.socialHeading}> Keep Yourself Updated</div>
        </div>
        <div className={styles.frameSection}>
          <Image
            src={Frame_insta}
            alt="instagram frame"
            height={300}
            width={300}
          />
          <Image
            src={Frame_facebook}
            alt="instagram frame"
            height={300}
            width={300}
          />{' '}
          <Image
            src={Frame_youtube}
            alt="instagram frame"
            height={300}
            width={300}
          />{' '}
          <Image
            src={Frame_twitter}
            alt="instagram frame"
            height={300}
            width={300}
          />{' '}
          <Image
            src={Frame_linkd}
            alt="instagram frame"
            height={300}
            width={300}
          />{' '}
        </div>
      </Container>

      <div className={styles.frameSection_mobile}>
        <Image
          src={Frame_insta}
          alt="instagram frame"
          height={100}
          width={100}
        />
        <Image
          src={Frame_facebook}
          alt="instagram frame"
          height={100}
          width={100}
        />{' '}
        <Image
          src={Frame_youtube}
          alt="instagram frame"
          height={100}
          width={100}
        />{' '}
        <Image
          src={Frame_twitter}
          alt="instagram frame"
          height={100}
          width={100}
        />{' '}
        <Image
          src={Frame_linkd}
          alt="instagram frame"
          height={100}
          width={100}
        />{' '}
      </div>
    </>
  );
};

export default SocialSection;
