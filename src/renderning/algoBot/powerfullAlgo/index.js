import React from 'react'
import styles from './powerfullAlgo.module.scss';
import CommonButton from '@/components/commonButton';
const Icon10 = '/assets/icons/icon10.svg';
const Backtesting = '/assets/icons/Backtesting.svg';
const Elimination = '/assets/icons/Elimination.svg';
const Plug = '/assets/icons/Plug.svg';
export default function PowerfullAlgo() {
  return (
    <div className={styles.powerfullAlgoAlignment}>
      <div className="container">
        <div className={styles.centerbutton}>
            <CommonButton text="Powerful Algorithms"/>
        </div>
        <h2>
        Simply Connect Your Trading with Powerful Algorithms
        </h2>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Icon10} alt="Icon10"/>
                </div>
                <h3>Best trading strategies</h3>
                <p>
                When it comes to trading strategies, there are thousands of trade systems are available on the internet and they all work on specific 
                market conditions.
                </p>
            </div>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Backtesting} alt="Backtesting"/>
                </div>
                <h3>Backtesting</h3>
                <p>
                Algorithmic trading is a form of automated investing that lets you test out strategies before putting real money on the line. This gives traders invaluable insight into whether or not their 
                strategy will work.
                </p>
            </div>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Elimination} alt="Elimination"/>
                </div>
                <h3>Elimination of Emotions</h3>
                <p>
                To minimize the emotional strain on traders, automated trading systems keep their emotions in check and allow them to follow a 
                strategy more easily.
                </p>
            </div>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Plug} alt="Plug"/>
                </div>
                <h3>Plug and Play</h3>
                <p>
                Automated trading is programmed to conduct trades on your behalf according to predetermined conditions by EA’s and automatically updated 
                in real-time.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}
