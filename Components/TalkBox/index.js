import React from 'react';
import styles from './TalkBox.module.css';
import right_arrow from '../../assests/right_arrow.png';
import Image from 'next/image';
import Link from 'next/link';

// Talk to an expert box
const TalkBox = ({ data }) => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.insideBox}>
        <div>
          <Link href={data.cta_link}>
            <Image
              src={right_arrow}
              alt="talk to an expert"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className={styles.free_box}>{data.cta_tag}</div>
        <div className={styles.title_first}>{data.cta_title}</div>
      </div>
      <div className={styles.description}>{data.cta_description}</div>
    </div>
  );
};

export default TalkBox;
