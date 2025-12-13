import React from "react";
import styles from "./whatsappbubble.module.scss";
import Whatsappicon from "../../../public/assets/icons/Whatsappicon";
import { useAppContext } from "../../context/AppContext";

export default function Whatsappbubble() {
  const { utilitySettings } = useAppContext();
  return (
    <>
      <a href={`https://wa.me/${utilitySettings?.phoneNo}?text=Hi%20want%20to%20Book%20a%20Live%20Session%20with%20Expert`}
        target="_blank"
        rel="noopener noreferrer" className={styles.whatsappbubble}>
        <span>Chat with us</span>
        <Whatsappicon />
      </a>
    </>
  );
}


