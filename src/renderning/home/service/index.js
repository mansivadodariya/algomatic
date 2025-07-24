import React from 'react'
import styles from './service.module.scss';
const Image1 = '/assets/images/img1.png';
const Image2 = '/assets/images/img2.png';
const Image3 = '/assets/images/img3.png';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
import Link from 'next/link';
import Atropos from 'atropos/react';

export default function Service() {
  return (
    <div className="container-lg">
      <div className={styles.serviceSectionalignment}>
        <div className="container">
          <div className={styles.buttonCenteralignment}>
            <CommonButton text="Services" />
          </div>
          <div className={styles.text}>
            <h2>Services Tailored for Forex Success</h2>
            <p>
              Unlock comprehensive solutions to enhance your Forex brokerage with cutting-edge technology 
              and expert support.
            </p>
          </div>
          <div className={styles.grid}>
          <Atropos shadow={0}>
            <div className={styles.griditems}>
              <Link href="/forex-crm">
              <button>01</button>
              <h3>Forex CRM
              </h3>
              <p>
                Manage clients and streamline operations with a CRM designed specifically 
                for Forex businesses.
              </p>
              <div className={styles.img}>
                <Image src={Image1} layout="fill" />
              </div>
              </Link>
            </div>
            </Atropos>
            <Atropos shadow={0}>
            <div className={styles.griditems}>
            <Link href="/vincent-forex-license">
              <button>02</button>
              <h3>Forex Licenses
              </h3>
              <p>
              Obtain your Forex broker license seamlessly in jurisdictions like Mauritius and St. Lucia with our expert guidance.
              </p>
              <div className={styles.img}>
                <Image src={Image2} layout="fill" />
              </div>
              </Link>
            </div>
            </Atropos>
            <Atropos shadow={0}>
            <div className={styles.griditems}>
            <Link href="/algo-bot">
              <button>03</button>
              <h3>Forex Algo Bot and Strategies</h3>
              <p>
              Automate your trading strategies using intelligent bots that execute trades based on real-time market analysis.
              </p>
              <div className={styles.img}>
                <Image src={Image3} layout="fill" />
              </div>
              </Link>
            </div>
            </Atropos>
          </div>
        </div>
      </div>
    </div>
  )
}
