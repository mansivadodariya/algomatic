import React from 'react'
import styles from './advantagesofAlgo.module.scss';
import CommonButton from '@/components/commonButton';
const Icon = '/assets/icons/icon8.svg';
export default function AdvantagesofAlgo() {
    return (
        <div className="container-lg">
            <div className={styles.advantagesofAlgo}>
                <div className="container">
                    <div className={styles.btnCenter}>
                        <CommonButton text="Algo Advantages" />
                    </div>
                    <h2>Advantages of Algo Trading</h2>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <div className={styles.icon}>
                                <img src={Icon} alt="Icon" />
                            </div>
                            <h3>Fast Execution of Orders</h3>
                            <p>
                                Experience lightning-speed trading with high-frequency algorithms, executing thousands of trades per second
                                for optimal performance.
                            </p>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.icon}>
                                <img src={Icon} alt="Icon" />
                            </div>
                            <h3>Automation</h3>
                            <p>
                                Enjoy seamless, automated trading with pre-programmed algorithms that handle everything from monitoring to execution, eliminating the need for human intervention.
                            </p>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.icon}>
                                <img src={Icon} alt="Icon" />
                            </div>
                            <h3>Risk Management</h3>
                            <p>
                                Algo trading integrates strategic risk management by automating entry/exit points, stop-loss, and fund rebalancing, reducing emotional trading
                                decisions.
                            </p>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.icon}>
                                <img src={Icon} alt="Icon" />
                            </div>
                            <h3>Human Error Reduction</h3>
                            <p>
                                Avoid costly mistakes like wrong inputs or forgotten stop-losses, as algo trading ensures precise, flawless execution without
                                human error.
                            </p>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.icon}>
                                <img src={Icon} alt="Icon" />
                            </div>
                            <h3>Cost Reduction</h3>
                            <p>
                                While setup costs can be high, algorithmic trading cuts long-term operational expenses and reduces transaction
                                costs for efficient trading.
                            </p>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.icon}>
                                <img src={Icon} alt="Icon" />
                            </div>
                            <h3>Free Algo Trading Software</h3>
                            <p>
                                Stay agile with free algo trading software
                                that allows you to modify algorithms in real-time, adapting to changing market conditions.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
