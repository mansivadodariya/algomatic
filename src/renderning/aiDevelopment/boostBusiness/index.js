import React from 'react'
import styles from './boostBusiness.module.scss';
import CommonButton from '@/components/commonButton';
export default function BoostBusiness() {
    return (
        <div className={styles.boostBusiness}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.text}>
                            <div className={styles.spacer}>
                                <CommonButton text="Boost to Your Business" />
                            </div>
                            <h2>
                                Get Significant Boost to Your Business with AI/ML Devleopment Services
                            </h2>
                            <p>
                                Gives information about how Algomatic  has grown and what they have achieved since the year 2019 which clearly portrays our commitment to quality
                                and client satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.subgrid}>
                            <div className={styles.subgridItems}>
                                <h3>
                                    810+
                                </h3>
                                <span>Remarkable Project</span>
                            </div>
                            <div className={styles.subgridItems}>
                                <h3>
                                    500+
                                </h3>
                                <span>Happy customers</span>
                            </div>
                            <div className={styles.subgridItems}>
                                <h3>120+</h3>

                                <span>Strong Team</span>
                            </div>
                            <div className={styles.subgridItems}>
                                <h3>90+</h3>
                                <span>Repeat Business Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
