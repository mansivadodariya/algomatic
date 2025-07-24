import { useEffect, useState } from "react";
import { api } from "./axios";

// const API_BASE_URL = "https://d0cf-122-182-206-37.ngrok-free.app/api/v1";
const API_BASE_URL = process.env.BACKEND_URL;
// export const getStrategies = async (page = 1, limit = 10) => {
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`${API_BASE_URL}/strategies?page=${page}&limit=${limit}`)
//         const result = await res.json()
//         setData(result)
//       } catch (error) {
//         console.error("Error fetching strategies:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [page, limit])

//   return { data, loading }
// }

export const getStrategies = async (page = 1, limit = 10) => {
  try {
    const res = await api.get(`/strategies?page=${page}&limit=${limit}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching strategies:", error);
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
    console.log(res, "------------------- res");
    return res.data;
  } catch (error) {
    console.error("Error fetching strategy by id:", error);
    return [];
  }
};

interface PaymentLinkData {
  name: string;
  email: string;
  metaAccountNo: string;
  strategyPlanId: string;
}

export const getPaymentLink = async (data: PaymentLinkData) => {
  try {
    const dataObj = {
      name: data.name,
      email: data.email,
      metaAccountNo: data.metaAccountNo,
      strategyPlanId: data.strategyPlanId,
    };
    console.log(dataObj, "------------------- getPaymentLink payload");
    const res = await api.post(`/payment/createPaymentLink`, dataObj);
    console.log(res, "------------------- res");
    return res.data;
  } catch (error) {
    console.error("Error fetching strategy by id:", error);
    return [];
  }
};
