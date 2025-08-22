import React, { useEffect, useState } from "react";
import styles from "./affiliatetabs.module.scss";
import Totalearningicon from "../../../../public/assets/icons/totalearningicon";
import Totalwithdrawelicon from "../../../../public/assets/icons/totalwithdrawelicon";
import Pendingwithdrawelicon from "../../../../public/assets/icons/pendingwithdrawelicon";
import Totalusericon from "../../../../public/assets/icons/totalusericon";
import Totaluserpaymenticon from "../../../../public/assets/icons/totaluserpaymenticon";
import { getAffiliateDashboardTabData } from "@/lib/userApi";

export default function Affiliatetabs({ selectedTabs, setSelectedTab, affiliateDashboardData, setRefetch }) {

  // handle tab selection for table view
  const handleTabSelection = (tab) => {
    const tabs = {
      withdrawList: false,
      pendingWithdrawAmount: false,
      myUser: false,
      paymentList: false,
    };
    tabs[tab] = true;
    setSelectedTab(tabs);
    setRefetch((prev) => !prev);
  };

  return (
    <>
      <div className={styles.affiliatetabsmain}>
        <div className="container-xl">
          <div className={styles.Affiliatetabstitle}>
            <h1>Referral Dashboard</h1>
          </div>
          <div className={styles.affiliatetabstabs}>
            <div className={`${styles.Affiliatetab} ${selectedTabs?.totalEarningAmount ? styles.active : ""}`}>
              <div className={styles.Affiliatetabicon}>
                <Totalearningicon />
              </div>
              <div>
                <p>Total Earning</p>
                <h2>${affiliateDashboardData?.totalEarningAmount ? Number(affiliateDashboardData?.totalEarningAmount).toFixed(3) : "0"}</h2>
              </div>
            </div>

            <div className={`${styles.Affiliatetab} ${selectedTabs.withdrawList ? styles.active : ""}`} onClick={() => handleTabSelection("withdrawList")}>
              <div className={styles.Affiliatetabicon}>
                <Totalwithdrawelicon />
              </div>
              <div>
                <p>Total Withdrawal</p>
                <h2>${affiliateDashboardData?.totalWithdrawAmount ? Number(affiliateDashboardData?.totalWithdrawAmount).toFixed(3) : "0"}</h2>
              </div>
            </div>

            <div className={`${styles.Affiliatetab} ${selectedTabs.pendingWithdrawAmount ? styles.active : ""}`} onClick={() => handleTabSelection("pendingWithdrawAmount")}>
              <div className={styles.Affiliatetabicon}>
                <Pendingwithdrawelicon />
              </div>
              <div>
                <p>Pending Withdrawal</p>
                <h2>${affiliateDashboardData?.pendingWithdrawAmount ? Number(affiliateDashboardData?.pendingWithdrawAmount).toFixed(3) : "0"}</h2>
              </div>
            </div>

            <div className={`${styles.Affiliatetab} ${selectedTabs.myUser ? styles.active : ""}`} onClick={() => handleTabSelection("myUser")}>
              <div className={styles.Affiliatetabicon}>
                <Totalusericon />
              </div>
              <div>
                <p>Total Users</p>
                <h2>{affiliateDashboardData?.myUserCount ? affiliateDashboardData?.myUserCount : "0"}</h2>
              </div>
            </div>

            <div className={`${styles.Affiliatetab} ${selectedTabs.paymentList ? styles.active : ""}`} onClick={() => handleTabSelection("paymentList")}>
              <div className={styles.Affiliatetabicon}>
                <Totaluserpaymenticon />
              </div>
              <div>
                <p>User Payments</p>
                <h2>{affiliateDashboardData?.totalUserPaymentCount ? affiliateDashboardData?.totalUserPaymentCount : "0"}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
