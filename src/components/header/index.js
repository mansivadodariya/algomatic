import React from 'react'
import styles from './header.module.scss';
import Image from 'next/image';
import DownArrow from '../icons/downArrow';
import Button from '../button';
import RightLgArrow from '../icons/rightLgArrow';
import Link from 'next/link';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import Right from '../icons/right';
import MobileHeader from '../mobileHeader';
const Logo = '/assets/logo/logo.jpg';
export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [header, setHeader] = useState(false);
  
  useEffect(() => {
    if (header) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [header]);
  const handleMouseEnter = (menu) => {
    if (menu != 0) {
      setHoveredMenu(menu);
    }

  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const menuItems = [
    {
      title: "Forex CRM",
      submenu: [],
      routes: "/forex-crm",
    },
    {
      title: "Forex Licenses",
      submenu: [
        {
          title: "Mauritius Forex License",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "/mauritius-forex-license"
        },
        {
          title: "St. Vincent Forex License",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "/vincent-forex-license"
        },
      ],
    },
    {
      title: "Algo Bot & Strategies",
      submenu: [
        {
          title: "AI bot development",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "algo-bot"
        },
        {
          title: "Strategies",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "strategies"
        },
      ],
    },
    {
      title: "Forex Services",
      submenu: [
        {
          title: "Web and Mobile App Development",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "/mobile-web-development"

        },
        {
          title: "AI/ML Development",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "/ai-development"

        },
      ],
    },
    //  {
    //   title: "FX Tools",
    //   submenu: [
    //     {
    //       title: "FX Guru",
    //       description:
    //         "Your intelligent FX Copilot. Get accurate and instant answers to all your forex-related queries - whether it's market trends, strategies, or technical definitions.",
    //       redirectLink: "https://fxguru.rejoicehub.com/",
    //       isNewTab : true
    //     },
    //     {
    //       title: "Trade Snap",
    //       description:
    //         "Instantly analyze chart snapshots to receive real-time Buy/Sell signals. A smart companion to guide your entry and exit decisions.",
    //       redirectLink: "https://trade-snap.rejoicehub.com/",
    //       isNewTab : true
    //     },
    //     {
    //       title: "FX Signal",
    //       description:
    //         "Unlock smarter trading with 20+ expert-grade indicators covering trend, momentum, volume, and volatility—designed for deep, actionable technical insights.",
    //       redirectLink: "https://fxsignal.rejoicehub.com/",
    //       isNewTab : true
    //     },
    //   ],
    // },

  ];


  const handleLinkClick = () => {
    setHoveredMenu(null);
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerAlignment}>
            <div className={styles.logo}>
              <Link href="/">
                <Image src={Logo} layout="fill" />
              </Link>
            </div>
            <div className={styles.menuAlignment}>
              {menuItems.map((menu, index) => (
                <div
                  key={index}
                  className={styles.relativeHeader}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.menu}>
                    {menu?.routes ? <Link href={menu?.routes}>{menu.title}</Link> : menu?.title}

                    {menu.submenu.length > 0 && <DownArrow />}
                  </div>
                  <div
                    onMouseEnter={handleMouseLeave}
                    className={classNames({
                      [styles.open]: hoveredMenu === index,
                      [styles.blurDiv]: hoveredMenu === index,

                    })}
                  ></div>
                  {menu.submenu.length > 0 && (
                    <div
                      className={classNames(
                        styles.submenubox,
                        hoveredMenu === index ? styles.show : styles.hide
                      )}
                    >
                      <div className="container">
                        <div className={styles.grid}>
                          {menu.submenu.map((item, i) => (
                            <Link className={styles.boxLine} href={item?.redirectLink} onClick={handleLinkClick} target={item.isNewTab ? '_blank' : ""} >
                              <div key={i} >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                              </div>
                               <div className={styles.solution}>
                                  <span>See Solution</span>
                                  <Right />
                                </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.buttonDesign}>
              <Link href="/contact-us">
                <Button text="Contact Us" icon={<RightLgArrow />} />
              </Link>
              <div className={styles.mobileMenu} onClick={() => setHeader(!header)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileHeader header={header} setHeader={setHeader} />
    </>
  );
}
