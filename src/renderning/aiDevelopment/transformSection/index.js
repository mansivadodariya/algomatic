import React from 'react'
import styles from './transformSection.module.scss';
import CommonButton from '@/components/commonButton';
const Icons1 = '/assets/icons/s1.svg';
const Icons2 = '/assets/icons/s2.svg';
const Icons3 = '/assets/icons/s3.svg';
const Icons4 = '/assets/icons/s4.svg';
export default function TransformSection() {
    return (
        <div className={styles.transformSection}>
            <div className="container">
                <div className={styles.centerAlignment}>
                    <CommonButton text="AI Services" />
                </div>
                <h2>
                    Transform Your Business with our AI & ML Solutions
                </h2>
                <p>
                Algomatic , We are providing advanced AI and ML Solutions as per your business requirements.
                </p>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.icon}>
                            <img src={Icons1} alt="Icons1" />
                        </div>
                        <h3>
                            Improved Decision Making
                        </h3>
                        <span>
                            Drive with the data to inform and drive business decisions that you make and reduce risks.
                        </span>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.icon}>
                            <img src={Icons2} alt="Icons2" />
                        </div>
                        <h3>
                            Operational Efficiency
                        </h3>
                        <span>
                            Automate routine work and streamline processes to let your team put focus on more valuable work and increase productivity overall.
                        </span>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.icon}>
                            <img src={Icons3} alt="Icons3" />
                        </div>
                        <h3>
                            Customer Experience
                        </h3>
                        <span>
                            Use AI and ML to create personalized touchpoints with your customers and deliver great service which in turn will help you increase overall customer satisfaction
                            and loyalty.
                        </span>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.icon}>
                            <img src={Icons4} alt="Icons4" />
                        </div>
                        <h3>
                            Competitive Advantage
                        </h3>
                        <span>
                            Being innovative, and having the ability to quickly adapt to market changes and take advantage of emerging
                            opportunities by leveraging new AI/ML technologies.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
