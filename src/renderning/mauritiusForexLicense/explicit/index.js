import React from 'react'
import styles from './explicit.module.scss';
import Image from 'next/image';
import CommonButton from '@/components/commonButton';
import SqureIcon from '@/components/icons/squreIcon';
const Image8 = '/assets/images/img8.png';
export default function Explicit() {
    return (
        <div className={styles.explicitAlignment}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.img}>
                            <Image src={Image8} layout="fill" />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <CommonButton text="EXPLICIT" />
                        <h2>Advantages</h2>
                        <div className={styles.iconText}>
                            <SqureIcon />
                            <span>All the companies are exempt from local tax for the first 25 years from the date of registration</span>
                        </div>
                        <div className={styles.iconText}>
                            <SqureIcon />
                            <span>No annual return has to be filed with the SVG authorities</span>
                        </div>
                        <div className={styles.iconText}>
                            <SqureIcon />
                            <span>No corporate or withholding taxes</span>
                        </div>
                        <div className={styles.iconText}>
                            <SqureIcon />
                            <span>The name of the directors, shareholders and officers are not disclosed on any public register</span>
                        </div>
                        <div className={styles.iconText}>
                            <SqureIcon />
                            <span>Low government and annual fees</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
