import React from 'react'
import styles from './bestMarketingTool.module.scss';
import CommonButton from '@/components/commonButton';
const ProgramImage = '/assets/images/program.png';
export default function BestMarketingTool() {
  return (
    <div className={styles.bestMarketingToolalignment}>
      <div className="container">
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <CommonButton text="The best marketing tool"/>
                <h2>
                Plugged-in referral program
                </h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className={styles.griditems}>
                <div className={styles.img}>
                    <img src={ProgramImage} alt="ProgramImage"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
