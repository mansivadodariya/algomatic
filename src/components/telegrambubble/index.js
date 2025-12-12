import React from 'react'
import styles from "./telegrambubble.module.scss";
import Whatsappicon from "../../../public/assets/icons/Whatsappicon";
import { useAppContext } from "../../context/AppContext";
import Telegramicon from '../../../public/assets/icons/telegramicon';

export default function Telegrambubble() {
    const { utilitySettings } = useAppContext();
    return (
        <a href={`${utilitySettings?.telegramLink}`} target="_blank" className={styles.telegrambubble}>
            <span>Chat with us</span>
            <Telegramicon />
        </a>
    )
}
