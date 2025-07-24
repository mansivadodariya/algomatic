import React from 'react'
import styles from './algoprocess.module.scss';
import CommonButton from '@/components/commonButton';
const ChartImage = '/assets/images/chart.png';
export default function Algoprocess() {
  return (
    <div className={styles.algoprocessAlignment}>
      <div className="container">
        <div className={styles.centeralignment}>
            <CommonButton text="Algo Process"/>
        </div>
        <h2>Our Algo Trading eco System</h2>
        <div className={styles.centerAlignmentImage}>
          <img src={ChartImage} alt="ChartImage"/>
        </div>
      </div>
    </div>
  )
}
