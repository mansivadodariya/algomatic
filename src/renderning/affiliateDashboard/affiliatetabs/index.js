import React from "react";
import styles from "./affiliatetabs.module.scss";
import Totalearningicon from "../../../../public/assets/icons/totalearningicon";
import Totalwithdrawelicon from "../../../../public/assets/icons/totalwithdrawelicon";
import Pendingwithdrawelicon from "../../../../public/assets/icons/pendingwithdrawelicon";
import Totalusericon from "../../../../public/assets/icons/totalusericon";
import Totaluserpaymenticon from "../../../../public/assets/icons/totaluserpaymenticon";

export default function Affiliatetabs() {
  return (
    <>
      <div className={styles.affiliatetabsmain}>
        <div className="container-xl">
          <div className={styles.Affiliatetabstitle}>
            <h1>Referral Program</h1>
          </div>
          <div className={styles.affiliatetabstabs}>
            <div className={styles.Affiliatetab}>
              <div className={styles.Affiliatetabicon}>
                <Totalearningicon />
              </div>
              <div>
                <p>Total Earning</p>
                <h2>$ 2420</h2>
              </div>
            </div>
            <div className={styles.Affiliatetab}>
              <div className={styles.Affiliatetabicon}>
                <Totalwithdrawelicon />
              </div>
              <div>
                <p>Total Withdrawal</p>
                <h2>$ 2420</h2>
              </div>
            </div>
            <div className={styles.Affiliatetab}>
              <div className={styles.Affiliatetabicon}>
                <Pendingwithdrawelicon />
              </div>
              <div>
                <p>Pending Withdrawal</p>
                <h2>$ 2420</h2>
              </div>
            </div>
            <div className={styles.Affiliatetab}>
              <div className={styles.Affiliatetabicon}>
                <Totalusericon />
              </div>
              <div>
                <p>Total Users</p>
                <h2>$ 2420</h2>
              </div>
            </div>
            <div className={styles.Affiliatetab}>
              <div className={styles.Affiliatetabicon}>
                <Totaluserpaymenticon />
              </div>
              <div>
                <p>Total User Payments</p>
                <h2>$ 2420</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
