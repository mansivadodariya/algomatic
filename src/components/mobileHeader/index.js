import React, { useEffect, useState } from "react";
import styles from "./mobileHeader.module.scss";
import Link from "next/link";
import Image from "next/image";
import DownArrow from "../icons/downArrow";
import classNames from "classnames";
import Commonarrowbutton from "../commonarrowbutton";
import { getUtilitySettings } from "@/lib/utilitySettingsApi";
const Logo = "/assets/logo/logo.svg";

export default function MobileHeader({ setHeader, header }) {
   const [utilitySettings, setUtilitySettings] = useState({});
   useEffect(() => {
     getUtilitySettings().then((res) => {
       setUtilitySettings(res?.payload);
     });
   }, []);
  return (
    <>
      <div className={classNames(styles.mobileHeaderoverlay, header ? styles.open : styles.hide)}></div>
      <div className={classNames(styles.mobileHeader, header ? styles.show : styles.hide)}>
        <div className={styles.menudetails}>
          <div className={styles.menulinks}>
            <Link href="/#About" onClick={() => setHeader(!header)}>
              About
            </Link>
            <Link href="/#Howitworks" onClick={() => setHeader(!header)}>
              How It Works
            </Link>
            <Link href="/#Keyfeatures" onClick={() => setHeader(!header)}>
              Features
            </Link>
            <Link href="/#Backtesting" onClick={() => setHeader(!header)}>
              Backtesting
            </Link>
            <Link href="/marketplace" onClick={() => setHeader(!header)}>
              Marketplace
            </Link>
          </div>
          <Commonarrowbutton Text="Contact Us" Butttonvarient="lightoutlined" link={`https://wa.me/${utilitySettings?.phoneNo}`} Target="blank" />
        </div>
      </div>
    </>
  );
}

