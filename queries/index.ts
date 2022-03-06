import { privateRequest } from "config/axios.config";
import { useQuery } from "react-query";
import { axiosErrorHandler } from "utils/errorHandler";

export interface ISkill {
  _id: string;
  name: string;
  description: string;
  release_date: string;
  creator: string;
  progress: number;
}

export const useSkill = () => {
  return useQuery<ISkill[], Error>(
    "fetch-user",
    async () => {
      try {
        const resp = await privateRequest.get("/skills");
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
