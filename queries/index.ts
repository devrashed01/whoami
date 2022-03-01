import { privateRequest } from "config/axios.config";
import { useQuery } from "react-query";
import { axiosErrorHandler } from "utils/errorHandler";

export interface ISkill {
  id: number;
  name: string;
  description: string;
  creator: string;
  progress_rate: number;
  ReleasDate: string;
}

export const useSkill = () => {
  return useQuery<ISkill[], Error>(
    "fetch-user",
    async () => {
      try {
        const resp = await privateRequest.get("/skils-api");
        return resp.data?.data;
      } catch (error) {
        axiosErrorHandler(error);
      }
    },
    {
      retry: false,
    }
  );
};
