import React from "react";
import styles from "./whatsappbubble.module.scss";
import Whatsappicon from "../../../public/assets/icons/Whatsappicon";

export default function Whatsappbubble() {
  return (
    <>
      <a href="https://api.whatsapp.com/send?phone=971509706562" target="__blank" className={styles.whatsappbubble}>
        <span>Chat with us</span>
        <Whatsappicon />
      </a>
    </>
  );
}
