import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "http://localhost:2000/movies";

export const useFetchStream = (endpoint) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movies/${endpoint}`
      );

      return data;
    },
  });
};
