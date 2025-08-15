import React, { useEffect, useState } from "react";
import Affiliatetabs from "./affiliatetabs";
import WithdrawList from "./withdrawList";
import Modal from "@/components/modal";
import styles from "./affiliateDashboard.module.scss";
import { useAppContext } from "@/context/AppContext";
import AffialiateUserPaymentList from "./affiliateUserPaymentList";
import MyAffiliateUserList from "./myAffiliateUserList";

export default function AffiliateDashboard() {
  const [selectedTabs, setSelectedTab] = useState({
    pendingWithdrawAmount: false, // modal
    withdrawList: false,  // table done
    myUser: false, // table done
    paymentList: true, // table
  });

  return (
    <>
      <Affiliatetabs selectedTabs={selectedTabs} setSelectedTab={setSelectedTab} />
      {selectedTabs.withdrawList && <WithdrawList />}
      {selectedTabs.pendingWithdrawAmount && <WithdrawList />}
      {selectedTabs.myUser && <MyAffiliateUserList />}
      {selectedTabs.paymentList && <AffialiateUserPaymentList />}

      {/* withdraw request modal */}
      {/* <Modal isOpen={false} onClose={() => {}} size="large" modalclass="large">
        <div className={styles.modalheader}>
          <h4>Add Affiliate</h4>
        </div>
        <div className={styles.modalbody}>
          <form>
            <div className={styles.formgroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter name" />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter email" />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal> */}
    </>
  );
}
//
