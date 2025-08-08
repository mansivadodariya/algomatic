import React, { useEffect, useState } from "react";
import styles from "./whatsappbubble.module.scss";
import Whatsappicon from "../../../public/assets/icons/Whatsappicon";
import { getUtilitySettings } from "@/lib/utilitySettingsApi";

export default function Whatsappbubble() {
   const [utilitySettings, setUtilitySettings] = useState({});
    useEffect(() => {
      getUtilitySettings().then((res) => {
        setUtilitySettings(res?.payload);
      });
    }, []);
  return (
    <>
      <a href={`https://wa.me/${utilitySettings?.phoneNo}`} target="_blank" className={styles.whatsappbubble}>
        <span>Chat with us</span>
        <Whatsappicon />
      </a>
    </>
  );
}


