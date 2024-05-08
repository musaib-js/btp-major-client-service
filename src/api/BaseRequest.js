// BaseRequest.js
import { useQueryClient, useMutation, useQuery } from "react-query";
import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_API_URL}/api`;

const useBaseMutation = (endpoint, config) => {
  const queryClient = useQueryClient();
  const url = `${BASE_URL}${endpoint}`;

  return useMutation(
    async (formData) => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.post(url, formData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        return response.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            const refreshResponse = await axios.post(
              `${BASE_URL}/users/token/refresh/`,
              {
                refresh: localStorage.getItem("refresh_token"),
              }
            );

            const newAccessToken = refreshResponse.data.access;
            localStorage.setItem("access_token", newAccessToken);

            const retryResponse = await axios.post(url, formData, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            return retryResponse.data;
          } catch (refreshError) {
            window.location.href = "/login";
            throw refreshError;
          }
        }

        throw error;
      }
    },
    {
      onSuccess: () => {},
    }
  );
};

const useBaseQuery = (endpoint, config) => {
  const queryClient = useQueryClient();
  const url = `${BASE_URL}${endpoint}`;

  return useQuery(
    endpoint,
    async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.get(url, {
          ...config,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return response.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            const refreshResponse = await axios.post(
              `${BASE_URL}/users/token/refresh/`,
              {
                refresh: localStorage.getItem("refresh_token"),
              }
            );
            const newAccessToken = refreshResponse.data.access;
            localStorage.setItem("access_token", newAccessToken);

            const retryResponse = await axios.get(url, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            return retryResponse.data;
          } catch (refreshError) {
            window.location.href = "/login";

            throw refreshError;
          }
        }
        throw error;
      }
    },
    {
      onSuccess: () => {},
    }
  );
};

export { useBaseMutation, useBaseQuery };
