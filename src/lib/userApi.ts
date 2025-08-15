import { useEffect, useState } from "react";
import { api } from "./axios";




export const getAffiliateDashboardTabData = async () => {
  try {
    const res = await api.get(`/user/affiliate-dashboard-tab`);
    return res.data;
  } catch (error) {
    console.error("Error in getAffiliateDashboardTabData:", error);
    return [];
  }
};

export const myAffiliateUserList = async () => {
  try {
    const res = await api.get(`/user/my-affiliate-user-list`);
    return res.data;
  } catch (error) {
    console.error("Error in myAffiliateUserList:", error);
    return [];
  }
};

export const withdrawReqList = async () => {
  try {
    const res = await api.get(`/user/withdraw-req-list`);
    return res.data;
  } catch (error) {
    console.error("Error in withdrawReqList:", error);
    return [];
  }
};

export const affiliatePaymentList = async () => {
  try {
    const res = await api.get(`/user/affiliate-payment-list`);
    return res.data;
  } catch (error) {
    console.error("Error in affiliatePaymentList:", error);
    return [];
  }
};



  