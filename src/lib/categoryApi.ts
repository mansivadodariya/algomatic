import { api } from "./axios";

export const getCategory = async () => {
  try {
    const res = await api.get(`/categories`);
    return res.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};