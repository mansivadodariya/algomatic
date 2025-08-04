import { api } from "./axios";

export const getUtilitySettings = async () => {
  try {
    const res = await api.get(`/utilitySettings`);
    return res.data;
  } catch (error) {
    console.error("Error fetching utility settings:", error);
    return [];
  }
};