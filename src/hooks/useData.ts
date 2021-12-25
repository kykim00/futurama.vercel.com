import useSWR from "swr";
import { FUTURAMA_API_ENDPOINT } from "../constants";
import { fetcher } from "../utils/fetcher";
export const useData = (pageName: string) => {
  return useSWR(`${FUTURAMA_API_ENDPOINT}${pageName}`, fetcher);
};
