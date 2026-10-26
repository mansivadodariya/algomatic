import { api } from "./axios";

export interface ContactUsPayload {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

export interface ContactUsResponse {
  success: boolean;
  message: string;
  payload?: {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    country: string;
    message: string;
    status: string;
    adminNotes: string | null;
    ipAddress?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

export const submitContactUs = async (
  data: ContactUsPayload
): Promise<ContactUsResponse> => {
  const res = await api.post(`/contact-us`, data);
  return res.data;
};

export const addContactUs = submitContactUs;
