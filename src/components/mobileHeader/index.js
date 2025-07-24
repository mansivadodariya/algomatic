// import React, { useState } from 'react'
// import styles from './mobileHeader.module.scss';
// import Link from 'next/link';
// import Image from 'next/image';
// import DownArrow from '../icons/downArrow';
// import classNames from 'classnames';
// const Logo = '/assets/logo/logo.jpg';

// export default function MobileHeader({ setHeader, header }) {
//     const [toogle, setToogle] = useState(false);
//     const [toogle1, setToogle1] = useState(false);
//     const [toogle2, setToogle2] = useState(false);
//     return (
//         <div className={classNames(styles.mobileHeader, header ? styles.show : styles.hide)}>
//             <div className={styles.subheaderStyle}>
//                 <div className={styles.logo}>
//                     <Link href="/">
//                         <Image src={Logo} layout="fill" />
//                     </Link>
//                 </div>
//                 <svg onClick={() => setHeader(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
//                     <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
//             </div>
//             <div className={styles.mobileBodyStyle}>
//                 <div className={styles.border}>
//                     <div className={styles.mobileMenu}>
//                         <Link onClick={() => setHeader(false)} href="/forex-crm">
//                             Forex CRM
//                         </Link>
//                     </div>
//                 </div>
//                 <div className={styles.border}>
//                     <div className={styles.mobileMenu}>
//                         <a>Forex Licenses</a>
//                         <div className={classNames(styles.animation, toogle ? styles.rotate : "")} onClick={() => setToogle(!toogle)}>
//                             <DownArrow />
//                         </div>
//                     </div>
//                     <div className={classNames(styles.mobileHeaderSubmenu, toogle ? styles.show : styles.hide)}>
//                         <div className={styles.spacer}>
//                             <Link onClick={() => setHeader(false)} href="/mauritius-forex-license">Mauritius Forex License</Link>
//                             <Link onClick={() => setHeader(false)} href="/vincent-forex-license">St. Vincent Forex License</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.border}>
//                     <div className={styles.mobileMenu}>
//                         <a>Algo Bot & Strategies</a>
//                         <div className={classNames(styles.animation, toogle1 ? styles.rotate : "")} onClick={() => setToogle1(!toogle1)}>
//                             <DownArrow />
//                         </div>
//                     </div>
//                     <div className={classNames(styles.mobileHeaderSubmenu, toogle1 ? styles.show : styles.hide)}>
//                         <div className={styles.spacer}>
//                             <Link onClick={() => setHeader(false)} href="/algo-bot">AI bot development</Link>
//                             <Link onClick={() => setHeader(false)} href="/strategies">Strategies</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.border}>
//                     <div className={styles.mobileMenu}>
//                         <a >Forex Services</a>
//                         <div className={classNames(styles.animation, toogle2 ? styles.rotate : "")} onClick={() => setToogle2(!toogle2)}>
//                             <DownArrow />
//                         </div>
//                     </div>
//                     <div className={classNames(styles.mobileHeaderSubmenu, toogle2 ? styles.show : styles.hide)}>
//                         <div className={styles.spacer}>
//                             <Link href="/mobile-web-development" onClick={() => setHeader(false)}>AI Web/ Mobile Development</Link>
//                             <Link href="/ai-development" onClick={() => setHeader(false)}>AI Development</Link>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div className={styles.border}>
//                     <div className={styles.mobileMenu}>
//                         <a >FX Tools</a>
//                         <div className={classNames(styles.animation, toogle2 ? styles.rotate : "")} onClick={() => setToogle2(!toogle2)}>
//                             <DownArrow />
//                         </div>
//                     </div>
//                     <div className={classNames(styles.mobileHeaderSubmenu, toogle2 ? styles.show : styles.hide)}>
//                         <div className={styles.spacer}>
//                             <a href='https://fxguru.rejoicehub.com/' onClick={() => setHeader(false)} aria-label='FX Guru' target='_blank'>FX Guru</a>
//                             <a href='https://trade-snap.rejoicehub.com/' onClick={() => setHeader(false)} aria-label='Trade Snap' target='_blank'>Trade Snap</a>
//                             <a href='https://dhanarthi-forex.netlify.app/' onClick={() => setHeader(false)} aria-label='Technical Analysis' target='_blank'>Technical Analysis</a>
//                         </div>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     )
// }


import React, { useState } from "react";
import styles from "./mobileHeader.module.scss";
import Link from "next/link";
import Image from "next/image";
import DownArrow from "../icons/downArrow";
import classNames from "classnames";
const Logo = "/assets/logo/logo.svg";

export default function MobileHeader({ setHeader, header }) {
  const [toogle, setToogle] = useState(false);
  const [toogle1, setToogle1] = useState(false);
  const [toogle2, setToogle2] = useState(false);
  return (
    <div className={classNames(styles.mobileHeader, header ? styles.show : styles.hide)}>
      <div className={styles.subheaderStyle}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo} layout="fill" />
          </Link>
        </div>
        <svg onClick={() => setHeader(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
      <div className={styles.mobileBodyStyle}>
        <div className={styles.border}>
          <div className={styles.mobileMenu}>
            <Link onClick={() => setHeader(false)} href="/forex-crm">
              Forex CRM
            </Link>
          </div>
        </div>
        <div className={styles.border}>
          <div className={styles.mobileMenu}>
            <a>Forex Licenses</a>
            <div className={classNames(styles.animation, toogle ? styles.rotate : "")} onClick={() => setToogle(!toogle)}>
              <DownArrow />
            </div>
          </div>
          <div className={classNames(styles.mobileHeaderSubmenu, toogle ? styles.show : styles.hide)}>
            <div className={styles.spacer}>
              <Link onClick={() => setHeader(false)} href="/mauritius-forex-license">
                Mauritius Forex License
              </Link>
              <Link onClick={() => setHeader(false)} href="/vincent-forex-license">
                St. Vincent Forex License
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.border}>
          <div className={styles.mobileMenu}>
            <a>Algo Bot & Strategies</a>
            <div className={classNames(styles.animation, toogle1 ? styles.rotate : "")} onClick={() => setToogle1(!toogle1)}>
              <DownArrow />
            </div>
          </div>
          <div className={classNames(styles.mobileHeaderSubmenu, toogle1 ? styles.show : styles.hide)}>
            <div className={styles.spacer}>
              <Link onClick={() => setHeader(false)} href="/algo-bot">
                AI bot development
              </Link>
              <Link onClick={() => setHeader(false)} href="/strategies">
                Strategies
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.border}>
          <div className={styles.mobileMenu}>
            <a>FX Tools</a>
            <div className={classNames(styles.animation, toogle2 ? styles.rotate : "")} onClick={() => setToogle2(!toogle2)}>
              <DownArrow />
            </div>
          </div>
          <div className={classNames(styles.mobileHeaderSubmenu, toogle2 ? styles.show : styles.hide)}>
            <div className={styles.spacer}>
              <a href="https://fxguru.rejoicehub.com/" onClick={() => setHeader(false)} aria-label="FX Guru" target="_blank">
                FX Guru
              </a>
              <a href="https://trade-snap.rejoicehub.com/" onClick={() => setHeader(false)} aria-label="Trade Snap" target="_blank">
                Trade Snap
              </a>
              <a href="https://dhanarthi-forex.netlify.app/" onClick={() => setHeader(false)} aria-label="Technical Analysis" target="_blank">
                Technical Analysis
              </a>
            </div>
          </div>
        </div>
        <div className={styles.border}>
          <div className={styles.mobileMenu}>
            {/* <a>FX Tools</a> */}
            <div className={classNames(styles.animation, toogle2 ? styles.rotate : "")} /* onClick={() => setToogle2(!toogle2)} */>
              {/* <DownArrow /> */}
              <Link onClick={() => setHeader(false)} href="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
