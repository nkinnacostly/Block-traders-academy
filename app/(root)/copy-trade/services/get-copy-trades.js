import { useQuery } from "@tanstack/react-query";

export const useGetTopTraders = () => {
  const url = `http://admin-api.blocktradersacademy.com/api/get-all-shared-trades`;
  const reqKey = ["get-all-shared-trades"];
  const { data, error, isLoading } = useQuery({
    queryKey: reqKey,
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return { data, error, isLoading };
};
