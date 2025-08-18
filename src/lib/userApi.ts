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

export const myAffiliateUserList = async (page = 1, size = 5) => {
  try {
    const res = await api.get(`/user/my-affiliate-user-list?page=${page}&size=${size}`);
    return res.data;
  } catch (error) {
    console.error("Error in myAffiliateUserList:", error);
    return [];
  }
};

export const withdrawReqList = async (page = 1, size = 5) => {
  try {
    const res = await api.get(`/user/withdraw-req-list?page=${page}&size=${size}`);
    return res.data;
  } catch (error) {
    console.error("Error in withdrawReqList:", error);
    return [];
  }
};

export const affiliatePaymentList = async (page = 1, size = 5) => {
  try {
    const res = await api.get(`/user/affiliate-payment-list?page=${page}&size=${size}`);
    return res.data;
  } catch (error) {
    console.error("Error in affiliatePaymentList:", error);
    return [];
  }
};

// send-withdraw-request
export const sendWithdrawRequest = async (data: any) => {
  try {
    const res = await api.post(`/user/send-withdraw-request`, data);
    console.log(res,'-----------------------------res111')
    return res;
  } catch (error) {
    console.error("Error in sendWithdrawRequest:", error);
    return [];
  }
};




  