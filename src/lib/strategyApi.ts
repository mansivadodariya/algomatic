import { useEffect, useState } from "react";
import { api } from "./axios";
import axios from "axios";
import { API_BASE_URL } from "./axios";

export const getStrategies = async (page = 1, limit = 10) => {
  try {
    const res = await api.get(`/strategies?page=${page}&limit=${limit}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching strategies:", error);
    return [];
  }
};

export const getStrategyById = async (id: string) => {
  try {
    const res = await api.get(`/strategies/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching strategy by id:", error);
    return [];
  }
};

export const getStrategyPlans = async (id: string) => {
  try {
    const res = await api.get(`/strategyPlan/all/${id}`);
    console.log(res, "------------------- res");
    return res.data;
  } catch (error) {
    console.error("Error fetching strategy by id:", error);
    return [];
  }
};

interface PaymentLinkData {
  userId: string;
  name: string;
  email: string;
  metaAccountNo: string;
  strategyPlanId: string;
}

export const getPaymentLink = async (data: PaymentLinkData) => {
  try {
    const dataObj = {
      userId: data.userId,
      name: data.name,
      email: data.email,
      metaAccountNo: data.metaAccountNo,
      strategyPlanId: data.strategyPlanId,
    };
    console.log(dataObj, "------------------- getPaymentLink payload");
    const res = await api.post(`/payment/createPaymentLink`, dataObj);
    console.log(res, "------------------- res");
    return res.data;
  } catch (error) {
    console.error("Error fetching strategy by id:", error);
    return [];
  }
};

export const updateMetaAccountNo = async (paymentId: string, metaAccountNo: string) => {
  try {
    const userObj = {
      metaAccountNo: metaAccountNo,
    };
    const res = await api.put(`/user/updateMetaAccountNo/${paymentId}`, userObj);
    return res.data;
  } catch (error) {
    console.error("Error updating meta account no:", error);
    throw error;
  }
};

export const editUser = async (userId: string, user: any) => {
  try {
    const userObj = {
      name: user?.name,
      phone: user?.phone,
      // metaAccountNo: user?.metaAccountNo,
    };
    const res = await api.put(`/user/edit/${userId}`, userObj);
    return res.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const getPaymentHistory = async () => {
  try {
    const res = await api.get(`/user/paymentList`);
    return res.data.payload.data;
  } catch (error) {
    console.error("Error fetching strategy by id:", error);
    return [];
  }
};

export const sendBotExeToUser = async (data: { email: string; metaAccountNo: string; date: string; planType: string }) => {
  try {
    const calculatePlanEndDate = (startDateStr: string, planType: string) => {
      const months = +planType.replace(/\D/g, "");
      const date = new Date(startDateStr);

      date.setMonth(date.getMonth() + months);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}T23:59`;
    };
    const formatedDate = calculatePlanEndDate(data.date, data.planType);

    const dataObj = {
      email: data.email,
      account_number: data?.metaAccountNo,
      end_date: formatedDate, // "2025-08-01T14:30"
    };

    const response = await axios.post(`https://fxpython.rejoicehub.com/update-details`, dataObj, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(response, "---------------------- response");
  } catch (error) {
    console.error("Error fetching strategy by id:", error);
    return [];
  }
};
