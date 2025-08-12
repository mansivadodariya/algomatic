import { useEffect, useState } from "react";
import { api } from "./axios";
import axios from "axios";
import { API_BASE_URL } from "./axios";

export const getCouponByCouponCode = async (couponCode: string) => {
  try {
    const res = await api.get(`/coupon/get-coupon-name?couponCode=${couponCode}`);
    return res?.data;
  } catch (error) {
    console.error("Error fetching coupon id by coupon code:", error);
    return [];
  }
};

