import React from "react";
import styles from "./mobileHeader.module.scss";
import Link from "next/link";
import classNames from "classnames";
import Commonarrowbutton from "../commonarrowbutton";
import { useAppContext } from "../../context/AppContext";

export default function MobileHeader({ setHeader, header }) {
  const { utilitySettings } = useAppContext();
  return (
    <>
      <div className={classNames(styles.mobileHeaderoverlay, header ? styles.open : styles.hide)} onClick={() => setHeader(!header)}></div>
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
              Algo Bot
            </Link>
          </div>
          <Commonarrowbutton Text="Contact Us" Butttonvarient="lightoutlined" link={`https://wa.me/${utilitySettings?.phoneNo}`} Target="blank" />
        </div>
      </div>
    </>
  );
}

