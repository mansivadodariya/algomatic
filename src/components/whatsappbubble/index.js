import React from "react";
import styles from "./whatsappbubble.module.scss";
import Whatsappicon from "../../../public/assets/icons/Whatsappicon";
import { useAppContext } from "../../context/AppContext";

export default function Whatsappbubble() {
    const { utilitySettings } = useAppContext();
  return (
    <>
      <a href={`https://wa.me/${utilitySettings?.phoneNo}`} target="_blank" className={styles.whatsappbubble}>
        <span>Chat with us</span>
        <Whatsappicon />
      </a>
    </>
  );
}


