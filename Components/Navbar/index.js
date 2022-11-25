import React from 'react';
import styles from './Navbar.module.css';
import TalkBox from '../TalkBox';
import Image from 'next/image';
import logo from '../../assests/sparsh_logo.png';
import facebook from '../../assests/facebook.png';
import Insta from '../../assests/INSTA.png';
import linkedin from '../../assests/linkedin.png';
import twitter from '../../assests/twitter.png';
import YT from '../../assests/YT.png';
import { Container } from 'react-bootstrap';
// navbar component
const Navbar = ({ data }) => {
  return (
    <>
      <div className={styles.navStyle}>
        <ul className={styles.listStyle}>
          <Container>
            <div className={styles.listBox}>
              <li>
                <div className={styles.listInsideBox}>
                  <div>
                    <a href={data.logo_link} className={styles.logo}>
                      <Image
                        src={logo}
                        alt="sparsh logo"
                        width={52}
                        height={68}
                      />
                    </a>
                  </div>
                  <div>
                    <TalkBox data={data.nav_cta} />
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.navIcons}>
                  <div>
                    {' '}
                    <Image
                      src={Insta}
                      alt="sparsh logo"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    {' '}
                    <Image
                      src={facebook}
                      alt="sparsh logo"
                      width={9}
                      height={16}
                    />
                  </div>
                  <div>
                    {' '}
                    <Image src={YT} alt="sparsh logo" width={19} height={12} />
                  </div>
                  <div>
                    <Image
                      src={twitter}
                      alt="sparsh logo"
                      width={20}
                      height={16}
                    />
                  </div>
                  <div>
                    {' '}
                    <Image
                      src={linkedin}
                      alt="sparsh logo"
                      width={17}
                      height={18}
                    />
                  </div>
                </div>
              </li>
            </div>
          </Container>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
