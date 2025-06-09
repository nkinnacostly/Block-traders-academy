import useApiRequest from "@/hooks/useCustonApiQuery";

export const useCopyTrader = () => {
  const { useMutationRequest } = useApiRequest();

  return useMutationRequest();
};
