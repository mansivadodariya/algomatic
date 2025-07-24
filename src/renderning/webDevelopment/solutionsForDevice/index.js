import React from 'react'
import styles from './solutionsForDevice.module.scss';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
const Card1Image = '/assets/images/card1.png';
const Card1Image2 = '/assets/images/card2.png';
const Card1Image3 = '/assets/images/card3.png';
export default function SolutionsForDevice() {
    return (
        <div className="container-lg">
            <div className={styles.solutionsForDevice}>
                <div className="container">
                    <div className={styles.centerAlignment}>
                        <CommonButton text="Digital Solutions for Every Device"/>
                    </div>
                    <h2>
                    Mobile & Web Development for Your Success
                    </h2>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <div className={styles.counter}>01</div>
                            <h3>
                            Custom App Development
                            </h3>
                            <p>
                                We create tailored mobile applications for iOS and Android, designed to meet your business needs and 
                                engage your users.
                            </p>
                            <div className={styles.cardImage}>
                                <Image src={Card1Image} layout="fill"  />
                            </div>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.counter}>02</div>
                            <h3>
                            Responsive Web Design
                            </h3>
                            <p>
                            Create visually appealing, high-performance websites that deliver a seamless experience 
                            across all devices.
                            </p>
                            <div className={styles.cardImage}>
                                <Image src={Card1Image2} layout="fill"  />
                            </div>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.counter}>03</div>
                            <h3>
                            E-Commerce Integration
                            </h3>
                            <p>
                            Develop secure and scalable e-commerce platforms with integrated payment gateways and CRM systems for streamlined operations.
                            </p>
                            <div className={styles.cardImage}>
                                <Image src={Card1Image3} layout="fill"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
