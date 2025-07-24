import React from 'react'
import styles from './formationSection.module.scss';
import Image from 'next/image';
import CommonButton from '@/components/commonButton';
import Button from '@/components/button';
import RightLgArrow from '@/components/icons/rightLgArrow';
const Image4 = '/assets/images/img04.png';
export default function FormationSection() {
  return (
    <div>
       <div className={styles.companyFormationAlignment}>
      <div className="container">
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <Image src={Image4} layout="fill"  />
            </div>
            <div className={styles.griditems}>
              <div>
              <CommonButton text="St. Vincent Company Formation"/>
                <h3>Start your Forex Brokerage Business in St Vincent</h3>
                <p>
                St Vincent and the Grenadines offers an advanced level of confidentiality and has one of the best privacy laws. You get lowest minimum capital requirements, no need to get a physical office, good payment service providers, and fast application process for St. Vincent forex license. The minimum paid-up capital requirement is lowest in the world. St. Vincent is calling you, get a St Vincent and the Grenadines Forex License! With Algomatic , you get comprehensive solutions for St. Vincent FSA and St. Vincent forex company formation process.
                 
                </p>
                <div className={styles.firstButton}>
          <Button text="Yes, I Want To Incorporate" icon={<RightLgArrow/>}/>
          </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
