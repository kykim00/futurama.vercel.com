import useSWR from "swr";
import { FUTURAMA_API_ENDPOINT } from "../constants";
import { fetcher } from "../utils/fetcher";
export const useData = (
  pageName: string,
  path: string | string[] | undefined
) => {
  if (path) pageName += "/" + path;
  return useSWR(`${FUTURAMA_API_ENDPOINT}${pageName}`, fetcher);
};
