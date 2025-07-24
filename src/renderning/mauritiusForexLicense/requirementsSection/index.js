import React from 'react'
import styles from './requirementsSection.module.scss';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
import SqureIcon from '@/components/icons/squreIcon';
const CardImage = '/assets/images/img6.png';
export default function RequirementsSection() {
  return (
    <div className={styles.requirementsSection}>
        <div className="container-lg">
            <div className={styles.btnCenter}>
                <CommonButton text="Minimum Paid-up Capital Required"/>
            </div>
            <div className={styles.title}>
                <h2>St. Vincent Forex License Requirements</h2>
            </div>
            <div className={styles.box}>
                <div className="container">
                    <div className={styles.grid}>
                        <div>
                            <div className={styles.firstText}>
                                {/* <h3>MUR 700000</h3> */}
                                {/* <p>
                                License Renewal Cost
                                </p>
                                <p>
                                <span>Note:</span> The company must be registered in Mauritius and have a registered office in Mauritius. Starting forex business in Mauritius is low cost, as there are strict confidentiality laws and 
                                flexible incorporation regulations.
                                </p> */}
                            </div>
                            <div className={styles.document}>
                                <h3>Documents Required :</h3>
                                <div className={styles.twoCol}>
                                    <div className={styles.twoColItems}>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Copies of passport notarized in English
                                            </span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Copies of last 3 months’ utility bill, notarized in English along with original
                                            </span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Directors/ Shareholders’ Bank Reference Letter
                                            </span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Reference letter from CA or CPA and Lawyer
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles.twoColItems}>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Copies of educational qualification certificate and CV in English
                                            </span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Bank balance confirmation letter stating a minimum balance of MUR 700,000
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.img}>
                            <Image src={CardImage} layout="fill" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
