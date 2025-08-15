import { useEffect, useState } from "react";
import { api } from "./axios";



export const becomeAffiliate = async () => {
  try {
    const res = await api.post(`/user/become-affiliate`);
    console.log(res,'-------------login')
    return res.data;
  } catch (error) {
    console.error("Error in become-affiliate:", error);
    return [];
  }
};
