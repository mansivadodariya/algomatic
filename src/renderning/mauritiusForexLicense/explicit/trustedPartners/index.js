import React from 'react'
import styles from './trustedPartners.module.scss';
const Icon1 = '/assets/icons/p1.svg';
const ForexVoyager = '/assets/images/ForexVoyager.png';
const Winprofx = '/assets/images/winprofx.svg';
const Juno = '/assets/images/juno.png';

export default function TrustedPartners() {
  return (
    <div className="container">
    <div className={styles.trustedPartners}>
      <h2>Trusted Partners</h2>
      <div className={styles.logoAlignment}>
        <img src={ForexVoyager} alt="ForexVoyager"/>
        <img src={Winprofx} alt="Winprofx"/>
        <img src={Juno} alt="Juno"/>
    </div>
    </div>
    </div>
  )
}
