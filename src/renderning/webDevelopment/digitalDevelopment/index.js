import React from 'react'
import styles from './digitalDevelopment.module.scss';
import CommonButton from '@/components/commonButton';
const Icond1 = '/assets/icons/d1.svg';
const Icond2 = '/assets/icons/d2.svg';
const Icond3 = '/assets/icons/d3.svg';
const Icond4 = '/assets/icons/d4.svg';
export default function DigitalDevelopment() {
  return (
    <div className={styles.digitalDevelopment}>
      <div className="container">
        <div className={styles.centerAlignment}>
            <CommonButton text="Digital Development"/>
        </div>
        <h2>
        Comprehensive Solutions for Modern Businesses
        </h2>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Icond1} alt="Icond1"/>
                </div>
                <h3>
                Cloud Solutions
                </h3>
                <p>
                Implementing cloud services for scalable and secure data storage and management.
                </p>
            </div>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Icond2} alt="Icond2"/>
                </div>
                <h3>
                Responsive Web Design
                </h3>
                <p>
                Creating adaptable websites that offer a seamless user experience across all devices.
                </p>
            </div>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Icond3} alt="Icond3"/>
                </div>
                <h3>
                E-Commerce Solutions
                </h3>
                <p>
                Developing secure online stores with integrated payment gateways for smooth transactions.
                </p>
            </div>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Icond4} alt="Icond4"/>
                </div>
                <h3>
                API Integration Services
                </h3>
                <p>
                Connecting third-party services to enhance functionality and streamline business processes.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}
