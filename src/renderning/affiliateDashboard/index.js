import React, { useEffect, useState } from "react";
import Affiliatetabs from "./affiliatetabs";
import WithdrawList from "./withdrawList";
import Modal from "@/components/modal";
import styles from "./affiliateDashboard.module.scss";
import { useAppContext } from "@/context/AppContext";
import AffialiateUserPaymentList from "./affiliateUserPaymentList";
import MyAffiliateUserList from "./myAffiliateUserList";
import WithdrawRequestForm from "./withdrawRequestForm";
import { getAffiliateDashboardTabData } from "@/lib/userApi";
import { useRouter } from "next/router";

export default function AffiliateDashboard() {
  const router = useRouter();
  const [affiliateDashboardData, setAffiliateDashboardData] = useState({});
  const [refetch, setRefetch] = useState(false);
  const [selectedTabs, setSelectedTab] = useState({
    pendingWithdrawAmount: false,
    withdrawList: false,
    myUser: false,
    paymentList: true,
  });

  // check valid user
  useEffect(() => {
    const storedUser = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null;
    if (!storedUser) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    getAffiliateDashboardTabData()
      .then((res) => {
        if (res.success) {
          setAffiliateDashboardData(res.payload);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  }, [refetch]);

  return (
    <>
      <Affiliatetabs selectedTabs={selectedTabs} setSelectedTab={setSelectedTab} affiliateDashboardData={affiliateDashboardData} setRefetch={setRefetch} />
      {selectedTabs.withdrawList && <WithdrawList />}
      {selectedTabs.pendingWithdrawAmount && <WithdrawRequestForm />}
      {selectedTabs.myUser && <MyAffiliateUserList />}
      {selectedTabs.paymentList && <AffialiateUserPaymentList />}
    </>
  );
}
