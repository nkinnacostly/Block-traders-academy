import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSessionStorageItem } from "../utils/storage";
// import { useUserStore } from "@/store/store";
// import { toast } from "sonner";
import { useCallback } from "react";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Custom hook for handling API requests
function useApiRequest() {
  const token = getSessionStorageItem({ key: "__session" });

  // Function to fetch data from API
  const fetchData = async (url) => {
    try {
      const response = await axiosInstance.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      // throw new Error(`Failed to fetch data from ${url}: ${error.message}`);
      console.log("Request Error:", error);
    }
  };

  // Function to handle mutation (POST, PUT, DELETE, etc.)
  const mutateData = async ({ method, url, data, headers = {} }) => {
    try {
      const response = await axiosInstance({
        method,
        url,
        data,
        headers: {
          ...headers, // Include custom headers if provided
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      // toast.error(`${error.response.data.error}`);

      // throw new Error(`${error}`);
      return error?.response?.data;
    }
  };

  // Custom hook for GET requests using React Query
  const useGetRequest = (url, reqKey, { enabled = true } = {}) => {
    return useQuery({
      queryKey: reqKey,
      queryFn: () => fetchData(url),
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      // refetchInterval: 1000 * 60 * 5, // 5 minutes
      // refetchIntervalInBackground: true,
      enabled,

      // enabled: !url,
    });
  };

  // Custom hook for mutation requests using React Query
  const useMutationRequest = () => {
    const mutationFn = useCallback(mutateData, []); // Memoize the mutation function

    return useMutation({ mutationFn });
  };

  return {
    useGetRequest,
    useMutationRequest,
  };
}

export default useApiRequest;
