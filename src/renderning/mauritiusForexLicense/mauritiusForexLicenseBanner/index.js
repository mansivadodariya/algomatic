import React from 'react'
import styles from './mauritiusForexLicenseBanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function MauritiusForexLicenseBanner() {
    return (
        <div className="container-lg">
            <div className={styles.mauritiusForexLicenseBanner}>
                <div className={styles.buttonCenter}>
                    <CommonButton text="Mauritius Forex License"/>
                </div>
                <h2>
                Company Formation & Mauritius Forex License
                </h2>
                <p>
                Start your forex business in Mauritius with simple 
                regulatory regime
                </p>
            </div>
        </div>
    )
}
