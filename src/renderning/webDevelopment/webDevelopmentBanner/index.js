import React from 'react'
import styles from './webDevelopmentBanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function WebDevelopmentBanner() {
  return (
    <div className='container-lg'>
      <div className={styles.webDevelopmentBanner}>
        <div className={styles.buttonCenter}>
        <CommonButton text="Web & Mobile Solution"/>
        </div>
        <h2>
        Comprehensive Mobile & Web Development Solutions
        </h2>
        <p>
        At Algomatic , we specialize in developing high-quality mobile apps and web solutions tailored to your business needs.
        </p>
      </div>
    </div>
  )
}
