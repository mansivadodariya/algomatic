import React from 'react'
import styles from './contactUsBanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function ContactUsBanner() {
    return (
        <div className="container-lg">
            <div className={styles.contactUsBanner}>
                <div className={styles.btnCenter}>
                    <CommonButton text="Get in Touch with Algomatic "/>
                </div>
                <h2>
                Reach Out for Any Inquiries or Support
                </h2>
                <p>Simply fill out the form below, and we’ll get back to you as soon as possible.</p>
            </div>
        </div>
    )
}
