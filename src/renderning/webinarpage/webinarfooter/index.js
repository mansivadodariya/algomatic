import React from "react";
import styles from "./webinarfooter.module.scss";

export default function Webinarfooter() {
  return (
    <>
      <div className={styles.webinarfootermain}>
        <div className="container-xl">
          <div className={styles.webinarfooter}>
            <div className={styles.webinarfooterleft}>
              <h1>
                Almost Full <span>Only 2 Seats Left</span>
              </h1>
              <p>Registrations End on 29 SEP</p>
            </div>
            <div className={styles.webinarfooterright}>
              <button className={styles.ctaButton}>Secure Your Seat Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
