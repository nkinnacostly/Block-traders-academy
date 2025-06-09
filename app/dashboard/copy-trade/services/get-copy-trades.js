import { useQuery } from "@tanstack/react-query";

export const useGetTopTraders = () => {
  const url = `https://block-traders.com.blocktraders.academy/api/get-all-shared-trades`;
  const reqKey = ["get-all-shared-trades"];
  const { data, error, isLoading } = useQuery({
    queryKey: reqKey,
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return { data, error, isLoading };
};
