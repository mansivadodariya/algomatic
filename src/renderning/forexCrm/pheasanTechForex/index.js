import React from 'react'
import styles from './pheasanTechForex.module.scss';
import CommonButton from '@/components/commonButton';
import SqureIcon from '@/components/icons/squreIcon';
const SavingImage = '/assets/images/saving.png';
export default function PheasanTechForex() {
    return (
        <>
            <div className={styles.pheasanTechForexalignment}>
                <div className="container">
                    <div className={styles.center}>
                        <CommonButton text="Forex CRM" />
                    </div>
                    <h2>
                        Why choose Algomatic  Forex CRM?
                    </h2>
                    <div className={styles.grid}>
                        <div>
                            <div className={styles.griditems}>
                                <div className={styles.cardHeader}>
                                    <p>01</p>
                                    <span>Amazing Features</span>
                                </div>
                                <div className={styles.allIconText}>
                                    <div className={styles.icongrid}>
                                        <SqureIcon />
                                        <span>Allows your sales teams to execute the tasks digitally</span>
                                    </div>
                                    <div className={styles.icongrid}>
                                        <SqureIcon />
                                        <span>Integrates widgets and tools as per the requirements</span>
                                    </div>
                                    <div className={styles.icongrid}>
                                        <SqureIcon />
                                        <span>Prepares the foundation for automation with RPA & AI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.top}>
                            <div className={styles.griditems}>
                                <div className={styles.cardHeader}>
                                    <p>02</p>
                                    <span>Total Customization</span>
                                </div>
                                <div className={styles.allIconText}>
                                    <div className={styles.icongrid}>
                                        <SqureIcon />
                                        <span>Customized CRM as per the scale and target audience</span>
                                    </div>
                                    <div className={styles.icongrid}>
                                        <SqureIcon />
                                        <span>Easy upgrades/ updates to finetune the functionalities</span>
                                    </div>
                                    <div className={styles.icongrid}>
                                        <SqureIcon />
                                        <span>Constant insights & reports to monitor the performance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.griditems}>
                                <div className={styles.cardHeader}>
                                    <p>03</p>
                                    <span>Ease of Using</span>
                                </div>
                                <div className={styles.allIconText}>
                                    <div className={styles.icongrid}>
                                        <SqureIcon />
                                        <span>Simple and straight forward user interface for the team</span>
                                    </div>
                                    <div className={styles.icongrid}>
                                        <SqureIcon />
                                        <span>Designed to save the time and efforts of the sales teams</span>
                                    </div>
                                    <div className={styles.icongrid}>
                                        <SqureIcon />
                                        <span>Easy to learn processes; and easier to use on daily basis</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-lg">
        <div className={styles.savingBoxDesign}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <CommonButton text="fund retention"/>
                        <h2>Savings</h2>
                        <div className={styles.text}>
                            <p>Create your saving program where your clients can invest funds to earn interest</p>
                        </div>
                        <div className={styles.twoCol}>
                            <div>
                                <h3>Fixed savings</h3>
                                <p>Fixed savings</p>
                                <p>Person commits particular amount of funds and receives %</p>
                                <p>Broker can configure various plans per customer</p>
                                <p>Broker can apply fees such as participation or redeem</p>
                            </div>
                            <div>
                                <h3>Flexible savings</h3>
                                <p>Unlimited top-ups of the program</p>
                                <p>Broker can apply tiers to attract more funds</p>
                                <p>Percentage can be adjusted by the broker depending on the demand</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.img}>
                            <img src={SavingImage} alt="SavingImage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
        </>
    )
}
