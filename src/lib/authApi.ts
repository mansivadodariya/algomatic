import { useEffect, useState } from "react";
import { api } from "./axios";



export const loginUser = async (email: string, password: string) => {
  try {
    const res = await api.post(`/user/login`, { email, password });
    return res.data;
  } catch (error) {
    console.error("Error fetching login:", error);
    return [];
  }
};

export const signUpUser = async (name: string, email: string, phone: string, password: string, confirmPassword: string, countryCode: string) => {
    try {
      const res = await api.post(`/user/signup`, { name, email, phone, password, confirmPassword, countryCode });
      return res.data;
    } catch (error) {
      console.error("Error fetching signup:", error);
      return [];
    }
};

export const sendOtp = async (email: string) => {
    try {
      const res = await api.post(`/user/sendOtp`, { email });
      return res.data;
    } catch (error) {
      console.error("Error fetching sendOtp:", error);
      return [];
    }
};

export const verifyOtp = async (email: string, otp: string) => {
    try {
      const res = await api.post(`/user/verifyOtp`, { email, otp });
      return res.data;
    } catch (error) {
      console.error("Error fetching verifyOtp:", error);
      return [];
    }
};

export const changePassword = async (email: string, password: string, confirmPassword: string) => {
    try {
      const res = await api.put(`/user/change-password`, { email, newPassword:password, confirmPassword });
      return res.data;
    } catch (error) {
      console.error("Error fetching change-password:", error);
      return [];
    }
};
