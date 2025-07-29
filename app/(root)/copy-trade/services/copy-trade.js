import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useCopyTrader = () => {
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(data.url, data);
    },
  });
  return mutation;
};
