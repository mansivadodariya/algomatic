import React from 'react'
import styles from './mobileAndWeb.module.scss';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
import SqureIcon from '@/components/icons/squreIcon';
const WebImage = '/assets/images/web.png';
export default function MobileAndWeb() {
  return (
    <div className={styles.mobileAndWebAlignment}>
      <div className="container">
        <div className={styles.centerAlignment}>
            <CommonButton text="Mobile & Web"/>
        </div>
        <h2>
            Empowering Your Business Through Digital Solutions
            </h2>
            <div className={styles.grid}>
                <div className={styles.griditems}>
                    <h3>Benefits of Mobile Development:</h3>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Wider Customer Reach</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Enhanced User Engagement</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Real-Time Communication</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Monetization Opportunities</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Offline Access</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Brand Visibility</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Improved Efficiency</span>
                    </div>
                </div>
                <div className={styles.griditems}>
                    <div className={styles.img}>
                        <Image src={WebImage} layout="fill" />
                    </div>
                </div>
                <div className={styles.griditems}>
                    <h3>
                    Benefits of Web Development:
                    </h3>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Broader Online Presence</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Responsive Design</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>SEO & Traffic Growth</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Easy Updates & Scalability</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>E-Commerce Integration</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Cost-Effective Marketing</span>
                    </div>
                    <div className={styles.iconGrid}>
                        <SqureIcon/>
                        <span>Data Analytics & Insights</span>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}
