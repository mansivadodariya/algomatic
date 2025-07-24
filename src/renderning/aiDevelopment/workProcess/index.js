import React from 'react'
import styles from './workProcess.module.scss';
import CommonButton from '@/components/commonButton';
export default function WorkProcess() {
    return (
        <div className="container-lg">
            <div className={styles.workProcess}>
                <div className="container">
                    <div className={styles.centerAlignment}>
                        <CommonButton text="How It Work" />
                    </div>
                    <h2>
                        Our Work Process
                    </h2>
                    <p>
                        The systematic approach of Algomatic  is worth an in-depth exploration, where expertise is combined for results that
                        are beyond compare.
                    </p>
                    <div className={styles.grid}>
                        <div className={styles.gridiitems}>
                            <div className={styles.center}>
                                <div className={styles.counter}>01</div>
                            </div>
                            <h3>
                                Requirement Analysis
                            </h3>
                            <span>We start by understanding your forex business needs, ensuring our solutions are perfectly
                                aligned with your goals and challenges. This deep dive sets the foundation for a successful collaboration.
                            </span>
                        </div>
                        <div className={styles.gridiitems}>
                            <div className={styles.center}>
                                <div className={styles.counter}>02</div>
                            </div>
                            <h3>
                                Design & Development
                            </h3>
                            <span>
                                Our team crafts tailored forex solutions with a focus on innovation and functionality. From web platforms to AI bots, we design and develop to
                                ensure seamless performance.
                            </span>
                        </div>
                        <div className={styles.gridiitems}>
                            <div className={styles.center}>
                                <div className={styles.counter}>03</div>
                            </div>
                            <h3>
                                Testing & Quality Assurance
                            </h3>
                            <span>
                                We rigorously test every solution to meet top industry standards. Our focus is on ensuring that your platforms operate smoothly and reliably in the fast-
                                paced forex market.
                            </span>
                        </div>
                        <div className={styles.gridiitems}>
                            <div className={styles.center}>
                                <div className={styles.counter}>03</div>
                            </div>
                            <h3>
                                Deployment & Support
                            </h3>
                            <span>
                                After successful testing, we deploy the solution and offer continuous support. Whether it’s trading platforms or CRM systems, we ensure smooth operations post-launch.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
