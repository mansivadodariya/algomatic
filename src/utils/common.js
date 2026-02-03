import axios from "axios";
import { useEffect, useState } from "react";
const ipInstance = require("what-is-my-ip-address");

// date formate dd-mm-yyyy
export const dateFormate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};

export const calculatePlanEndDate = (startDateStr, planType) => {
  if (planType === "Life Time") planType = "240months";
  const months = +planType.replace(/\D/g, "");
  const date = new Date(startDateStr);

  date.setMonth(date.getMonth() + months);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}T23:59`;
};

export const calculatePlanEndDateWithTotalDays = (startDateStr, planType) => {
  if (planType === "Life Time") planType = "240months";
  const months = +planType.replace(/\D/g, "");
  const date = new Date(startDateStr);

  date.setMonth(date.getMonth() + months);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Map of fixed plan durations
  const planDaysMap = {
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
    240: 7300, // Life Time
  };

  const totalDays = planDaysMap[months] || 0;

  return {
    endDate: `${year}-${month}-${day}T23:59`,
    totalDays,
  };
};

// fetching IP address from third party provider
export const fetchIpAddress = async () => {
  const ipAddress = await ipInstance.v4();
  return ipAddress;
};

// this function will be called when user doesn't allow their location permission
export const fetchIPInfo = async () => {
  const ip = await fetchIpAddress();

  // calling route handler to fetch IP data
  const request = await fetch(`api/fetchIPInfo?ip=${ip}`);
  const jsonResponse = await request?.json();
  return jsonResponse;
};
