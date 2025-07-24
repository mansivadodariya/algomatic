import React from 'react'
import styles from './vincentforexLicenseProcess.module.scss';
import CommonButton from '@/components/commonButton';
const GlobalIcon = '/assets/icons/global.svg';
const MauritiusIcon = '/assets/icons/Mauritius.svg';
const RequirementsIcon = '/assets/icons/requirements.svg';
const WorldusIcon = '/assets/icons/worldus.svg';
export default function VincentforexLicenseProcess() {
  return (
    <div className={styles.processAlignment}>
      <div className="container">
        <div className={styles.btnCenteralignment}>
            <CommonButton text="Process"/>
        </div>
        <div className={styles.title}>
            <h2>To Get St. Vincent Forex License Lets obtain your St. Vincent Forex Broker License</h2>
          
        </div>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.iconAlignment}>
                    <img src={GlobalIcon} alt="GlobalIcon"/>
                </div>
                <h3>Register an International Business Company in St. Vincent</h3>
                <h4>01</h4>
            </div>
            <div className={styles.griditems}>
                <div className={styles.iconAlignment}>
                    <img src={MauritiusIcon} alt="MauritiusIcon"/>
                </div>
                <h3>Submit an application for St. Vincent Forex Broker License</h3>
                <h4>02</h4>
            </div>
            <div className={styles.griditems}>
                <div className={styles.iconAlignment}>
                    <img src={RequirementsIcon} alt="RequirementsIcon"/>
                </div>
                <h3>Fulfilling the capital requirements</h3>
                <h4>03</h4>
            </div>
            <div className={styles.griditems}>
                <div className={styles.iconAlignment}>
                    <img src={WorldusIcon} alt="WorldusIcon"/>
                </div>
                <h3>Maintain a registered office address within St. Vincent</h3>
                <h4>04</h4>
            </div>
            
            <div className={styles.griditems}>
                <p>
                Time Frame
                </p>
                <span>Fastest in the world</span>
            </div>
        </div>
      </div>
    </div>
  )
}
