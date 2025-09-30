import { api } from "./axios";

type AddInquiryFormProps = {
  ipAddress: string;
  name?: string;
  email?: string;
  countryCode?: string;
  phone?: string;
  brokerName?: string;
  tradingPlatform?: string;
  equity?: string;
}

export const addInquiryForm = async ({ipAddress, name, email, countryCode, phone, brokerName, tradingPlatform, equity}: AddInquiryFormProps) => {
  try {
    const res = await api.post(`/inquiry`, { ipAddress, name, email, countryCode, phone, brokerName, tradingPlatform, equity });
    return res.data;
  } catch (error) {
    console.error("Error fetching addInquiryForm:", error);
    return [];
  }
};

export const addMarketingInquiry = async ({ipAddress, name, email, countryCode, phone, brokerName, tradingPlatform, equity}: AddInquiryFormProps) => {
  try {
    const res = await api.post(`/inquiry/marketing-inquiry`, { ipAddress, name, email, countryCode, phone, brokerName, tradingPlatform, equity });
    return res.data;
  } catch (error) {
    console.error("Error fetching addInquiryForm:", error);
    return [];
  }
};

export const getInquiryByIp = async ({ipAddress}: AddInquiryFormProps) => {
  try {
    const res = await api.get(`/inquiry/${ipAddress}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching addInquiryForm:", error);
    return [];
  }
};
