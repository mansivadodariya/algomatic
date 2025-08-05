import React, { useEffect, useState } from 'react'
import styles from './herobanner.module.scss';
import Button from '@/components/button';
import WaveIcon from '@/components/icons/waveIcon';
import Slider from "react-slick";
import RightLgArrow from '@/components/icons/rightLgArrow';
const Banner1 = '/assets/images/banner1.png';
const Banner2 = '/assets/images/banner2.png';
const Banner3 = '/assets/images/banner3.png';

import RightBlackLg from '@/components/icons/rightBlackLg';
import Image from 'next/image';
import Link from 'next/link';

export default function Herobanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [delayedSlide, setDelayedSlide] = useState(0); // State to hold delayed slide

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      // Set a delay before updating the activeSlide
      setTimeout(() => {
        setDelayedSlide(next); // Update the delayed slide after a certain time
      }, 500); // Delay in milliseconds (e.g., 1000 ms = 1 second)
    }
  };
  // const banners = [Banner1, Banner2, Banner3];
  const [animateClass, setAnimateClass] = useState('');

  useEffect(() => {
    if (activeSlide) {
      setAnimateClass('animate__animated animate__fadeIn');
      const timer = setTimeout(() => {
        setAnimateClass('');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeSlide]);

  useEffect(() => {
    if (delayedSlide !== activeSlide) {
      const timeoutId = setTimeout(() => {
        setActiveSlide(delayedSlide); // Update the active slide state after the delay
      }, 500); // Delay in milliseconds

      return () => clearTimeout(timeoutId); // Cleanup timeout on unmount or when delayedSlide changes
    }
  }, [delayedSlide]); // Effect will run when delayedSlide changes


  const slides = [
    {
      title: "Optimize Operations with Our CRM",
      description: "Streamline your client management and enhance efficiency with our tailored CRM solutions. Designed specifically for Forex brokers to help you stay organized and boost performance.",
      image: Banner1
    },
    {
      title: "Obtain Your Forex Broker License",
      description: "Easily navigate the licensing process with our expert guidance. Start your Forex brokerage in Mauritius or St. Lucia today.",
      image: Banner2
    },
    {
      title: "Trade Better, Smarter, Faster.",
      description: "Leverage AI-powered tools to automate your trading strategies and maximize returns. Experience faster execution and smarter decision-making with Algomatic .",
      image: Banner3
    }
  ];
  return (
    <>
      <div className="container-lg">
        <div className={styles.herobannerDesign}>
          <div className={styles.forxButtonAlignment}>
            <button>
              <WaveIcon />
              Forex Trading Simplified
            </button>
          </div>

          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div className={styles.sliderText} key={index}>
                <h2>{slide.title}</h2> {/* Change title based on activeSlide */}
                <p>{slide.description}</p> {/* Change description based on activeSlide */}
              </div>
            ))}
          </Slider>
          <div className={styles.twoButtonAlignment}>
            <div className={styles.firstButton}>
              <Link href="/contact-us">
                <Button text="Get Started" icon={<RightLgArrow />} />
              </Link>
            </div>
            <div className={styles.secButton}>
              <Button text="Try For Free" icon={<RightBlackLg />} outline={true} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bannerCenterAlignment}>
        <div className={styles.box}>
          <Image className={animateClass} src={slides[activeSlide].image} layout="fill" />
        </div>
      </div>
    </>
  )
}
