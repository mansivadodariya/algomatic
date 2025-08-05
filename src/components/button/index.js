import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
import Atropos from "atropos/react";

export default function Button({ text, outline, icon,purple, send, onClick, isBtnLoading = false }) {
  return (
    <div className={classNames(styles.button, purple ? styles.purple : "", outline ? styles.outline : "")}>
      {/* <Atropos shadow={0}> */}
      <button onClick={onClick}>
        {text}
        {icon}
        {isBtnLoading && <span className={styles.loader}></span>}
      </button>
      {/* </Atropos> */}
    </div>
  );
}
