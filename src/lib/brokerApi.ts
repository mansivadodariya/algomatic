import { api, API_BASE_URL } from "./axios";

export interface BrokerItem {
  _id?: string;
  id?: string;
  name: string;
  subtitle?: string;
  logo?: string;
  category?: string;
  description?: string;
  features?: string[];
  highlights?: string[];
  website_url?: string;
  websiteUrl?: string;
  is_active?: boolean;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface BrokerPayload {
  data: BrokerItem[];
  count?: number;
  totalRecords?: number;
  currentPage?: number;
  totalPages?: number;
  pageSize?: number;
}

export interface BrokerResponse {
  success: boolean;
  message: string;
  payload: BrokerPayload;
}

export interface BrokerQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  is_active?: boolean;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

const KNOWN_BROKER_LOGOS: Record<string, string> = {
  avatrade: "/assets/logo/ava-trade.png",
  "ava trade": "/assets/logo/ava-trade.png",
  pepperstone: "/assets/logo/pepperstonelogo.jpg",
  cmc: "/assets/logo/cmclogo.png",
  "cmc markets": "/assets/logo/cmclogo.png",
  hfm: "/assets/logo/hfmlogo.webp",
  hotforex: "/assets/logo/hfmlogo.webp",
  skyriss: "/assets/logo/skyrisslogo.jpg",
  tickmill: "/assets/logo/tick-mill.png",
  "fifo market": "/assets/logo/fifo-market.png",
  fifomarket: "/assets/logo/fifo-market.png",
  daman: "/assets/logo/damanmarketlogo.png",
};

/**
 * Returns a local fallback logo for known brokers
 */
export const getFallbackBrokerLogo = (_brokerName?: string): string => {
  return "";
};

/**
 * Resolves broker logo image URL gracefully
 */
export const resolveBrokerLogo = (logo?: string): string => {
  if (logo && logo.trim()) {
    if (logo.startsWith("http://") || logo.startsWith("https://") || logo.startsWith("/assets/")) {
      return logo;
    }
    const cleanBase = API_BASE_URL.replace(/\/api\/v1\/?$/, "");
    if (logo.startsWith("/")) {
      return `${cleanBase}${logo}`;
    }
    return `${cleanBase}/${logo}`;
  }

  return "";
};

/**
 * Get All Brokers with pagination, search, category filter, and sorting
 */
export const getAllBrokers = async (params: BrokerQueryParams = {}): Promise<BrokerResponse> => {
  const query = new URLSearchParams();

  if (params.page) query.append("page", String(params.page));
  if (params.limit) query.append("limit", String(params.limit));
  if (params.search?.trim()) query.append("search", params.search.trim());
  if (params.category && params.category !== "all") query.append("category", params.category);
  if (params.is_active !== undefined) query.append("is_active", String(params.is_active));
  if (params.sortBy) query.append("sortBy", params.sortBy);
  if (params.sortOrder) query.append("sortOrder", params.sortOrder);

  const queryString = query.toString();
  const url = `/broker/getAllBroker${queryString ? `?${queryString}` : ""}`;

  try {
    const res = await api.get<BrokerResponse>(url);
    return res.data;
  } catch (err: any) {
    // Fallback attempt to `/broker` if `/broker/getAllBroker` 404s on certain backend setups
    if (err?.response?.status === 404) {
      try {
        const fallbackUrl = `/broker${queryString ? `?${queryString}` : ""}`;
        const fallbackRes = await api.get<BrokerResponse>(fallbackUrl);
        return fallbackRes.data;
      } catch (fallbackErr) {
        console.warn("Fallback /broker also failed:", fallbackErr);
      }
    }
    throw err;
  }
};

/**
 * Fetch distinct active broker categories from API
 */
export const getBrokerCategories = async (): Promise<string[]> => {
  try {
    const res = await getAllBrokers({ limit: 100, is_active: true });
    const list = res?.payload?.data || [];
    const unique = Array.from(
      new Set(list.map((b) => b.category?.trim()).filter(Boolean) as string[])
    );
    return unique;
  } catch (err) {
    console.warn("Error fetching broker categories from API:", err);
    return [];
  }
};

/**
 * Fetch a single broker by ID or fallback to search in getAllBrokers
 */
export const getBrokerById = async (id: string): Promise<BrokerItem | null> => {
  if (!id) return null;

  const urlsToTry = [
    `/broker/getBroker/${id}`,
    `/broker/getBrokerById/${id}`,
    `/broker/${id}`,
  ];

  for (const url of urlsToTry) {
    try {
      const res = await api.get(url);
      const data = res?.data?.payload || res?.data?.data || res?.data;
      if (data && (data._id || data.id || data.name)) {
        return data;
      }
    } catch {
      // Continue to next endpoint
    }
  }

  // Fallback: search in getAllBrokers
  try {
    const all = await getAllBrokers({ limit: 100, is_active: true });
    const list = all?.payload?.data || [];
    const found = list.find(
      (b) =>
        b._id === id ||
        b.id === id ||
        b.name?.toLowerCase().replace(/\s+/g, "-") === id.toLowerCase()
    );
    if (found) return found;
  } catch (err) {
    console.warn("Could not find broker in getAllBrokers list:", err);
  }

  return null;
};

