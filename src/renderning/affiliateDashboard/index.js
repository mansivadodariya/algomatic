import React, { useEffect, useState } from "react";
import Affiliatetabs from "./affiliatetabs";
import WithdrawList from "./withdrawList";
import Modal from "@/components/modal";
import styles from "./affiliateDashboard.module.scss";
import { useAppContext } from "@/context/AppContext";
import AffialiateUserPaymentList from "./affiliateUserPaymentList";
import MyAffiliateUserList from "./myAffiliateUserList";
import WithdrawRequestForm from "./withdrawRequestForm";  

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
      {selectedTabs.pendingWithdrawAmount && <WithdrawRequestForm />}
      {selectedTabs.myUser && <MyAffiliateUserList />}
      {selectedTabs.paymentList && <AffialiateUserPaymentList />}
    </>
  );
}
//
