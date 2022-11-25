import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import footerLogoMsd from '../../assests/footer_msd_logo.png';
import facebook from '../../assests/facebook_white.png';
import instagram from '../../assests/instagram_white.png';
import linkedin from '../../assests/linkedin_white.png';
import twitter from '../../assests/twitter_white.png';
import youtube from '../../assests/youtube_white.png';
import footerIcon from '../../assests/footer_icon.png';
import { Container } from 'react-bootstrap';
const Footer = ({ data }) => {
  console.log('data', data);
  return (
    <footer>
      <Container>
        <div className={styles.footerDisclaimer}>
          <div className={styles.footerDisclaimerHeading}>Disclamer:</div>
          <p className={styles.footerDisclaimerPara}>
            The information contained herein is meant purely for awareness, it
            does not substitute for a doctor’s advice. Please speak to your
            doctor for more information. Images for representation purposes
            only.
          </p>
        </div>
      </Container>
      <div className={styles.footerBanner}>
        <Container>
          <div className={styles.footerBannerLogo}>
            <Link href={data.logo_link}>
              <Image
                src={footerLogoMsd}
                className={styles.footerLogoMsd}
                alt="Msd Logo"
              />
            </Link>
            <ul className={styles.socialIconsLinks}>
              <li>
                <Image src={instagram} width={17} height={17} alt="instagram" />
              </li>
              <li>
                <Image src={facebook} width={17} height={17} alt="facebook" />
              </li>
              <li>
                <Image src={youtube} width={17} height={17} alt="youtube" />
              </li>
              <li>
                <Image src={twitter} width={17} height={17} alt="twitter" />
              </li>
              <li>
                <Image src={linkedin} width={17} height={17} alt="linkedin" />
              </li>
            </ul>
          </div>
          <div className={styles.footerContent}>
            {data.copyright_text}
            <a href="#" className={styles.footerContentBold}>
              <u>contactmsdindia@merck.com</u>
            </a>{' '}
            <br />
            If you want to report an adverse experience related to an MSD
            product-
            <a href="#" className={styles.footerContentBold}>
              <u>click here</u>
            </a>{' '}
            <br />
            You can also contact us atclick here{' '}
            <span className={styles.footerContentBold}>
              Tel: 18001032642; Fax: 01244375562
            </span>{' '}
          </div>
          <div className={styles.footerLinksSection}>
            <div className={styles.footerLinks}>
              <div className={styles.footerContentLinks}>
                Privacy Policy | Accessibility | Terms of Use | Sitemap
              </div>
              <span className={styles.footerIcon}>
                <Image
                  src={footerIcon}
                  alt="footer Icon"
                  width={48}
                  height={18}
                />
              </span>
            </div>
            <div className={styles.footerDateLabel}>
              IN-GSL-00103 | May 2022–2023
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
