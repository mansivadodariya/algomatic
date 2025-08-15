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

export const getCategoryWithStrategies = async (page = 1, limit = 10) => {
  try {
    const res = await api.get(`/categories?page=${page}&limit=${limit}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
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
  metaAccountNo: string[];
  strategyPlanId: string;
  noOfBots: number;
  couponId: string | null;
}

export const getPaymentLink = async (data: PaymentLinkData) => {
  try {
    const dataObj = {
      userId: data?.userId,
      name: data?.name,
      email: data?.email,
      // metaAccountNo: [""],
      // metaAccountNo: data?.metaAccountNo,
      strategyPlanId: data?.strategyPlanId,
      noOfBots: data?.noOfBots,
      couponId: data?.couponId?? null,
    };
    const res = await api.post(`/payment/createPaymentLink`, dataObj);
    return res.data;
  } catch (error) {
    console.error("Error fetching strategy by id:", error);
    return [];
  }
};

export const updateMetaAccountNo = async (paymentId: string, metaAccountNo: string[]) => {
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

export const getBotByName = async (botName: string) => {
  try {
    const res = await api.get(`/bot/getBotByName?name=${botName}`);
    return res.data.payload;
  } catch (error) {
    console.error("Error fetching strategy by id:", error);
    return [];
  }
};


// rejoice company api
export const sendRejoiceBotExeToUser = async (data: { email: string; metaAccountNo: string; date: string; planType: string; file_name: string }) => {
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

    // calculate expiry date of plan
    const formatedDate = calculatePlanEndDate(data.date, data.planType);

    const dataObj = {
      email: data.email,
      account_number: data?.metaAccountNo,
      end_date: formatedDate, // "2025-08-01T14:30"
      file_name: data?.file_name || "test",
    };

    await axios.post(`https://fxpython.rejoicehub.com/update-details`, dataObj, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Error fetching strategy by id:", error);
    return [];
  }
};

// algo client spiral company api
export const sendSpiralBotExeToUser = async (data: { email: string; metaAccountNo: string; date: string; planType: string; file_name: string }) => {
  try {

    const calculatePlanEndDate = (
      startDateStr: string,
      planType: string
    ): { endDate: string; totalDays: number } => {
      const months = +planType.replace(/\D/g, "");
      const date = new Date(startDateStr);
    
      date.setMonth(date.getMonth() + months);
    
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
    
      // Map of fixed plan durations
      const planDaysMap: { [key: number]: number } = {
        1: 30,
        2: 60,
        3: 90,
        4: 120,
        5: 150,
        6: 180,
        7: 210,
        8: 240,
        9: 270,
        10: 300,
        11: 330,
        12: 365,
      };
    
      const totalDays = planDaysMap[months] || 0;
    
      return {
        endDate: `${year}-${month}-${day}T23:59`,
        totalDays,
      };
    };
    
    // calculate expiry date and total days of plan
    const { endDate, totalDays } = calculatePlanEndDate(data.date, data.planType);
    
    const dataObj = {
      account_id: data?.metaAccountNo,
      days_valid: totalDays,
      email: data?.email,
      template: data?.file_name || "template_EA.mq5",
    }

    await fetch('https://ea.aistrategy19.com/api/generate-ea', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 4534405',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObj),
    });
    
  } catch (error) {
    console.error("Error fetching strategy by id:", error);
    return [];
  }
};

