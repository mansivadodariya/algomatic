import React from 'react'
import styles from './RequirementsSectionSt.module.scss';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
import SqureIcon from '@/components/icons/squreIcon';
const CardImage = '/assets/images/img6.png';
export default function RequirementsSectionSt() {
  return (
    <div>
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
                                <h3>Minimum Paid-up Capital Required</h3>
                                <p>
                                Lowest in the world
                                </p>
                            </div>
                            <div className={styles.document}>
                                <h3>Documents Required :</h3>
                                <div className={styles.twoCol}>
                                    <div className={styles.twoColItems}>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Notarized passport copy (Should be notarized in English - 3 copies)
                                            </span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Last 3 months utility bill (Should be notarized in English - 3 copies with original)
                                            </span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Director/Shareholder's bank reference letter
                                            </span>
                                        </div>
                                       
                                    </div>
                                    <div className={styles.twoColItems}>
                                    <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Lawyer's reference letter
                                            </span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>The copy of educational degree certificate (Should be in English)
                                            </span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Director/Shareholder's CV
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
    </div>
  )
}
