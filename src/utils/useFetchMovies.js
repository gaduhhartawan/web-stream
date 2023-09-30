import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchMovies = (endpoint, { select }) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/${endpoint}`
      );

      return data;
    },
    select,
  });
};
