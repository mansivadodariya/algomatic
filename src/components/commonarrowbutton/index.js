import React from "react";
import styles from "./commonarrowbutton.module.scss";
import Arrowicon from "../../../public/assets/icons/arrowicon";
import Link from "next/link";
import Loader from "../loader";

export default function Commonarrowbutton({ Text, Butttonvarient, link, Target, buttonclassName, icon, onClick, isBtnLoading, disabled }) {
  const showIcon = icon !== "none" && !isBtnLoading;

  const buttonContent = (
    <button className={`${styles.commonarrowbutton} ${styles[Butttonvarient]} ${styles[buttonclassName]}`} onClick={onClick} disabled={disabled || isBtnLoading}>
      <span>{Text}</span>
      {showIcon && (
        <div className={styles.butonarrow}>
          <Arrowicon />
          <Arrowicon />
        </div>
      )}
      {isBtnLoading && <Loader />}
    </button>
  );

  if (link && link !== "none") {
    const targetValue = Target || "_blank";
    return (
      <Link href={link} target={targetValue}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
