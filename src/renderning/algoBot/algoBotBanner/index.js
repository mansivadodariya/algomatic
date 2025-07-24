import React from 'react'
import styles from './algoBotBanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function AlgoBotBanner() {
    return (
        <>
        <div className="container-lg">
            <div className={styles.algoBotBanner}>
                <div className={styles.centerButton}>
                <CommonButton text="Forex Algo bot"/>
                </div>
                <h1>
                Trade Better, Smarter, Faster.
                </h1>
                <p>Algomatic ’s Algo Trading empowers you to automate strategies with precision, transforming your trading into a seamless experience.</p>
            </div>
        </div>
        </>
    )
}
