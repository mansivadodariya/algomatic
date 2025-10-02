import React from "react";
import styles from "./growingsection.module.scss";
import Repoicon from "../../../../public/assets/icons/repoicon";
import Usericon from "../../../../public/assets/icons/usericon";
import Teamicon from "../../../../public/assets/icons/teamicon";
import Rocketicon from "../../../../public/assets/icons/rocketicon";

export default function Growingsection() {
  return (
    <>
      <div className={styles.growingsectionmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.growingsectiontitle}>
              <h2>
                Growing <span>Together</span>
              </h2>
            </div>
            <div className={styles.grid}>
              <div className={styles.griditems}>
                <Repoicon />
                <span>810+</span>
                <p>Repository</p>
              </div>
              <div className={styles.griditems}>
                <Usericon />
                <span>500+</span>
                <p>Customers</p>
              </div>
              <div className={styles.griditems}>
                <Teamicon />
                <span>112+</span>
                <p>Strong Team</p>
              </div>
              <div className={styles.griditems}>
                <Rocketicon />
                <span>80+</span>
                <p>Repository</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
