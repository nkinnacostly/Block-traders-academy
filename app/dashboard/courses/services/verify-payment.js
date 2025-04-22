import { request } from "@/utils/network";
import { useQuery } from "@tanstack/react-query";
export const verifyPayment = async (trxref) => {
  const response = await request({
    url: `payment/callback/${trxref}/paystack`,
    method: "GET",
  });

  return response;
};

export const useVerifyPayment = (trxref) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["verify-payment", trxref],
    queryFn: () => verifyPayment(trxref),
  });

  return { data, isLoading, isError };
};
