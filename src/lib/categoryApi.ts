import { api } from "./axios";

export const getCategory = async () => {
  try {
    const res = await api.get(`/categories`);
    console.log(res.data.payload.data, "----------------res1111")
    return res.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};