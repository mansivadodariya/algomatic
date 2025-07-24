import React from 'react'
import styles from './worksLike.module.scss';
import CommonButton from '@/components/commonButton';
const Icon01 = '/assets/icons/icon01.svg';
const Icon03 = '/assets/icons/icon03.svg';
const Icon04 = '/assets/icons/icon04.svg';
const Icon05 = '/assets/icons/icon05.svg';
const Icon06 = '/assets/icons/icon06.svg';
const QualityOrientedImage = '/assets/images/Quality-oriented.png';
const ReliableImage = '/assets/images/Reliable.png';
const SecureImage = '/assets/images/Secure.png';
export default function WorksLike() {
  return (
    <div className={styles.worksLikeAlignment}>
      <div className="container">
        <div className={styles.centeralignment}>
            <CommonButton text="Work Process"/>
        </div>
        <h2>
        Works like a clock
        </h2>
        <div className={styles.allbox}>
        <div className={styles.grayBox}>
            <div className={styles.grid}>
                <div className={styles.griditems}>
                    <div className={styles.firstHeader}>
                        <p>
                        01
                        </p>
                        <span>Quality-oriented</span>
                    </div>
                    <div className={styles.secText}>
                        <p>
                        Our robust technology stack helps produce the highest-quality solution on the 
                        market
                        </p>
                    </div>
                    <div className={styles.twoCol}>
                        <div className={styles.twoColitems}>
                            <div className={styles.icon}>
                                <img src={Icon01} alt="Icon01"/>
                            </div>
                            <p>
                            Seamless Data Integration with Web API
                            </p>
                            <span>
                            Powerful Web API allows getting direct data retrieval from trading platforms through our system for various reporting purposes
                            </span>
                        </div>
                        <div className={styles.twoColitems}>
                            <div className={styles.icon}>
                                <img src={Icon01} alt="Icon01"/>
                            </div>
                            <p>
                            Interface Design with React and Angular
                            </p>
                            <span>
                            Cutting-edge design frameworks like React and Angular get you the most of your interface
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.griditems}>
                    <div className={styles.img}>
                        <img src={QualityOrientedImage} alt="QualityOrientedImage"/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.grayBox}>
            <div className={styles.grid}>
                <div className={styles.griditems}>
                    <div className={styles.firstHeader}>
                        <p>
                        02
                        </p>
                        <span>Reliable</span>
                    </div>
                    <div className={styles.secText}>
                        <p>
                        Not just a word to us. Meticulous testing and well-thought architecture are highly prioritised
                        </p>
                    </div>
                    <div className={styles.twoCol}>
                        <div className={styles.twoColitems}>
                            <div className={styles.icon}>
                                <img src={Icon03} alt="Icon03"/>
                            </div>
                            <p>
                            Client-Focused Solutions Since Many Year's
                            </p>
                            <span>
                                We offer user-friendly solutions with helpful guides and educational sessions to easily work 
                            with our products
                            </span>
                        </div>
                        <div className={styles.twoColitems}>
                            <div className={styles.icon}>
                                <img src={Icon04} alt="Icon04"/>
                            </div>
                            <p>
                            Advanced Architecture
                            </p>
                            <span>
                            Experience unparalleled stability with our product. By leveraging Docker, microservices, and advanced architecture, we deliver seamless integration and reliable performance
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.griditems}>
                    <div className={styles.img}>
                        <img src={ReliableImage} alt="ReliableImage"/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.grayBox}>
            <div className={styles.grid}>
                <div className={styles.griditems}>
                    <div className={styles.firstHeader}>
                        <p>
                        03
                        </p>
                        <span>Secure</span>
                    </div>
                    <div className={styles.secText}>
                        <p>
                        We value our reputation & long-term relations. Your funds are safe with us
                        </p>
                    </div>
                    <div className={styles.twoCol}>
                        <div className={styles.twoColitems}>
                            <div className={styles.icon}>
                                <img src={Icon05} alt="Icon05"/>
                            </div>
                            <p>
                            Automated Monitoring
                            </p>
                            <span>
                            Each client's setup has a dedicated server with 
                            fully automated monitoring system to track the uptime of your production environment
                            </span>
                        </div>
                        <div className={styles.twoColitems}>
                            <div className={styles.icon}>
                                <img src={Icon06} alt="Icon06"/>
                            </div>
                            <p>
                            2FA and User Management
                            </p>
                            <span>
                            Our support department monitors 
                            any potential errors and resolves them quickly and effectively
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.griditems}>
                    <div className={styles.img}>
                        <img src={SecureImage} alt="SecureImage"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
