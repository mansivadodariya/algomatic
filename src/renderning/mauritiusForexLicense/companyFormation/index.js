import React from 'react'
import styles from './companyFormation.module.scss';
import Image from 'next/image';
import CommonButton from '@/components/commonButton';
import Button from '@/components/button';
import RightLgArrow from '@/components/icons/rightLgArrow';
import Link from 'next/link';
const Image4 = '/assets/images/img4.png';
export default function CompanyFormation() {
  return (
    <div className={styles.companyFormationAlignment}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.griditems}>
            <Image src={Image4} layout="fill" />
          </div>
          <div className={styles.griditems}>
            <div>
              <CommonButton text="Mauritius Company Formation" />
              <h3>Start your forex broking business in Mauritius</h3>
              <p>
                Mauritius offers amazing business experience with affordable capital requirements, fine banking services, payment service provider support, and easy application process for Mauritius forex license. The minimum paid-up capital requirement is MUR 700,000. Mauritius is the best destination for you, get a Mauritius Forex License! With Algomatic  , you get total support for Mauritius FSC and Mauritius forex company formation process. Contact us if you want to know more
                about company formation.
              </p>
              <div className={styles.firstButton}>
                <Link href="/contact-us">
                  <Button text="Get Started" icon={<RightLgArrow />} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
