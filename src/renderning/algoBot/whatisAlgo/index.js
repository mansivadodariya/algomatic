import React from 'react'
import styles from './whatisAlgo.module.scss';
import Image from 'next/image';
import CommonButton from '@/components/commonButton';
const AlgoImage = '/assets/images/algo.png';
export default function WhatisAlgo() {
  return (
    <div className={styles.whatisAlgoAlignment}>
      <div className="container">
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.img}>
                    <Image src={AlgoImage} layout="fill"  />
                </div>
            </div>
            <div className={styles.griditems}>
                <CommonButton text="What Is Algo?"/>
                <h2>
                Algo Trading
                </h2>
                <p>
                Algo trading harnesses advanced algorithms to execute trading strategies with unparalleled precision, catering to traders seeking to customise their approach for a tailored trading experience. This innovative trading form allows individuals to leverage broker-provided API keys, granting access to automated operations that transform complex strategies into seamless actions. Algo trading, gaining momentum for its ability to simplify trading through technology, enables even those without programming skills to participate effectively. Traders can back-test strategies confidently, ensuring their moves are both smart and strategic. As Algo trading becomes increasingly popular, it represents the future of trading, offering a platform where strategies are not just executed but optimised, marking a significant shift in how trading success is achieved and redefining opportunities in the 
                financial markets.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}
