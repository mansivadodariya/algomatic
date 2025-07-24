import React from 'react'
import styles from './forexCrmBanner.module.scss';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
const BannerImage = '/assets/images/crm-img.png';
export default function ForexCrmBanner() {
    return (
        <>
        <div className="container-lg">
            <div className={styles.forexCrmBanner}>
                <div className={styles.centeralignment}>
                    <CommonButton text="Forex CRM"/>
                </div>
                <h2>
                Transform Client Management with Forex CRM
                </h2>
                <p>
                This highlights the core purpose of the CRM while making it clear that it's tailored for Forex brokers.
                </p>
            </div>
        </div>
        <div className={styles.crmBannerCenteralignment}>
            <div className={styles.img}>
            <Image src={BannerImage} layout="fill" />
            </div>
        </div>
    </>
    )
}
