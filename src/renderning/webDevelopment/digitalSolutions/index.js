import React from 'react'
import styles from './digitalSolutions.module.scss';
import CommonButton from '@/components/commonButton';
import Button from '@/components/button';
import Link from 'next/link';
const DigitalImage = '/assets/images/digital-solutions.png';
import RightLgArrow from '@/components/icons/rightLgArrow';
import Image from 'next/image';
export default function DigitalSolutions() {
    return (
        <div className={styles.digitalSolutions}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.img}>
                            <Image src={DigitalImage} layout="fill" />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <CommonButton text="Innovative Digital Solutions" />
                        <h2>
                            Why Algomatic  for Mobile & Web Development?
                        </h2>
                        <p>
                            At Algomatic , we don’t just build mobile apps and websites—we craft digital experiences that empower your business. Our team combines technical expertise, creative design, and a deep understanding of industry trends to deliver cutting-edge
                            solutions that drive growth.
                        </p>
                        <div className={styles.buttonDesign}>
                            <Link href="/contact-us">
                                <Button text="Contact Us" icon={<RightLgArrow />} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
