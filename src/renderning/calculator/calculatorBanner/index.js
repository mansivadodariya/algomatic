import React from 'react'
import styles from './calculatorBanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function CalculatorBanner() {
  return (
      <div className="container-lg">
    <div className={styles.calculatorBanner}>
        <div className={styles.btnCenter}>
            <CommonButton text="Forex Calculator"/>
        </div>
        <h2>Algomatic  Calculator</h2>
        <p>
        Discover the cost of setting up a Forex Brokerage Business!
        </p>
      </div>
    </div>
  )
}
