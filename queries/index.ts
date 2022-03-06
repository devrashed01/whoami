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
    "fetch-skills",
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

export interface IProject {
  _id: string;
  name: string;
  description: string;
  release_date: string;
  demo_url: string;
  tags: string[];
}

export const useProject = (query: string) => {
  return useQuery<IProject[], Error>(
    ["fetch-projects", query],
    async () => {
      try {
        const resp = await privateRequest.get(`/projects${query}`);
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
