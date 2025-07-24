import React from 'react'
import styles from './whatisDevelopment.module.scss';
import CommonButton from '@/components/commonButton';
import Button from '@/components/button';
import Link from 'next/link';
const DigitalImage = '/assets/images/digital-solutions.png';
import RightLgArrow from '@/components/icons/rightLgArrow';
import Image from 'next/image';
export default function WhatisDevelopment() {
    return (
        <div className={styles.whatisDevelopment}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.img}>
                            <Image src={DigitalImage} layout="fill" />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <CommonButton text="What Is AI Development?" />
                        <h2>
                            Building Intelligent Systems for Automation and Innovation
                        </h2>
                        <p>
                            AI development involves creating intelligent systems that can perform tasks typically requiring human intelligence, such as decision-making, problem-solving, and learning. By leveraging machine learning, data analysis, and automation, AI solutions streamline operations and boost business efficiency. From chatbots to predictive analytics, AI transforms how businesses operate and grow.
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
