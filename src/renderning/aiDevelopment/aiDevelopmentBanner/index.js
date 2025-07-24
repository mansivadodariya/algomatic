import React from 'react'
import styles from './aiDevelopmentBanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function AiDevelopmentBanner() {
  return (
    <div className='container-lg'>
      <div className={styles.webDevelopmentBanner}>
        <div className={styles.buttonCenter}>
        <CommonButton text="AI Development"/>
        </div>
        <h2>
        AI/ML Development Services: Empowering Your Business
        </h2>
        <p>
        Drive innovation and efficiency in your business with expert AI & ML services by Algomatic .
        </p>
      </div>
    </div>
  )
}
