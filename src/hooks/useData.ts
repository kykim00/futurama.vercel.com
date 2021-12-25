import axios from "axios";
import useSWR from "swr";
import { FUTURAMA_API_ENDPOINT } from "../constants";

const fetcher = (url: string) => axios(url).then((res) => res.data);

export const useData = (pageName: string) => {
  return useSWR(`${FUTURAMA_API_ENDPOINT}${pageName}`, fetcher);
};
