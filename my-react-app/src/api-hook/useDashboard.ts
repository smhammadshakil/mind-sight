import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../auth/api";

const DASHBOARD_DATA = 'DASHBOARD_DATA'

const getDashboardData = async () => {
  const { data } = await axiosInstance.get(`/dashboard`);
  return data;
};

export const useGetDashboardData = () => {
  return useQuery({
    queryKey: [DASHBOARD_DATA],
    queryFn: () => getDashboardData(),
  });
};
