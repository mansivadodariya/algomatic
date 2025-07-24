import React from 'react'
import styles from './commonButton.module.scss';
import WaveIcon from '../icons/waveIcon';
import Atropos from 'atropos/react';

export default function CommonButton({ text }) {
    return (
        <div className={styles.commonButton}>
            <Atropos shadow={0}>
                <button aria-label={text} >
                    <WaveIcon />
                    {text}
                </button>
            </Atropos>
        </div>
    )
}
