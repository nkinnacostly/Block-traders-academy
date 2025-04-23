import { request } from "@/utils/network";
import { useQuery } from "@tanstack/react-query";
export const verifyPayment = async (trxref, redirecturl) => {
  const response = await request({
    url: `payment/callback/${trxref}/paystack${redirecturl}`,
    method: "GET",
  });

  return response;
};

export const useVerifyPayment = (trxref, redirecturl) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["verify-payment", trxref],
    queryFn: () => verifyPayment(trxref, redirecturl),
  });

  return { data, isLoading, isError };
};
