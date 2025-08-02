import React from "react";
import styles from "./commonarrowbutton.module.scss";
import Arrowicon from "../../../public/assets/icons/arrowicon";
import Link from "next/link";

export default function Commonarrowbutton({
  Text,
  Butttonvarient,
  link,
  Target,
  buttonclassName,
  icon,
}) {
  const showIcon = icon !== "none";

  const buttonContent = (
    <button
      className={`${styles.commonarrowbutton} ${styles[Butttonvarient]} ${styles[buttonclassName]}`}
    >
      <span>{Text}</span>
      {showIcon && (
        <div className={styles.butonarrow}>
          <Arrowicon />
          <Arrowicon />
        </div>
      )}
    </button>
  );

  if (link && link !== "none") {
    const targetValue = Target === "" ? "_blank" : Target;
    return (
      <Link href={link} target={targetValue}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
