import React from 'react'
import styles from './hireDedicatedDeveloper.module.scss';
import Image from 'next/image';
import CommonButton from '@/components/commonButton';
const HireImage = '/assets/images/hire.png';
const Icon1 = '/assets/icons/h1.svg';
const Icon2 = '/assets/icons/h2.svg';
const Icon3 = '/assets/icons/h3.svg';
export default function HireDedicatedDeveloper() {
  return (
    <div className={styles.hireDedicatedDeveloper}>
      <div className='container-lg'>
        <div className={styles.banner}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <CommonButton text="Models"/>
                        <h2>
                        Hire Dedicated Developer
                        </h2>
                        <div className={styles.allTextAlignment}>
                            <div className={styles.main}>
                                <div className={styles.mainHeader}>
                                    <img src={Icon1} alt="Icon1"/>
                                    <p>Ideal For</p>
                                </div>
                                <span>
                                Ongoing projects, continuous development, or expanding your in-house technical team.
                                </span>
                            </div>
                            <div className={styles.main}>
                                <div className={styles.mainHeader}>
                                    <img src={Icon2} alt="Icon2"/>
                                    <p>How It Works</p>
                                </div>
                                <span>
                                Leverage a dedicated team of our expert developers, fully integrated into your workflow, to deliver consistent, 
                                high-quality results tailored to your project needs.
                                </span>
                            </div>
                            <div className={styles.main}>
                                <div className={styles.mainHeader}>
                                    <img src={Icon3} alt="Icon3"/>
                                    <p>When To Choose</p>
                                </div>
                                <span>
                                Select this model when you need a long-term, committed team for complex and evolving projects requiring sustained 
                                development efforts.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.img}>
                            <Image src={HireImage} layout="fill" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
