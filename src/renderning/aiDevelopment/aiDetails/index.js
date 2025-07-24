import React from 'react'
import CommonButton from '@/components/commonButton';
import styles from './aiDetails.module.scss';
export default function AiDetails() {
    return (
        <div>
            <div clsssName={styles.aiDetailsDesignAlignment}>
                <div clsssName="container">
                    <div clsssName={styles.centerAlignment}>
                        <CommonButton text="AI Services" />
                    </div>
                    <h2>
                        Transform Your Business with our AI & ML Solutions
                    </h2>
                </div>
            </div>
        </div>
    )
}
