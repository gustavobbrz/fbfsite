import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { ApiResponse } from "../types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar token de autenticação
api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Redirecionar para login ou renovar token
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const handleApiError = (error: AxiosError): ApiResponse<null> => {
  return {
    data: null,
    status: error.response?.status || 500,
    message: error.response?.data?.message || "Um erro inesperado ocorreu",
  };
};

export const mockApi = {
  getRanking: async () => {
    return [
      {
        id: 1,
        name: "Carlos Silva",
        team: "Águia Dourada FC",
        goals: 15,
        assists: 8,
        avatar: "/images/players/carlos_silva.jpg",
      },
      {
        id: 2,
        name: "Fernando Alves",
        team: "Tubarões Azuis SC",
        goals: 22,
        assists: 5,
        avatar: "/images/players/fernando_alves.jpg",
      },
      {
        id: 3,
        name: "Rafael Oliveira",
        team: "Leões da Serra FC",
        goals: 5,
        assists: 10,
        avatar: "/images/players/rafael_oliveira.jpg",
      },
    ];
  },

  getStatistics: async () => {
    return [
      { name: "Jan", goals: 30, assists: 20 },
      { name: "Feb", goals: 40, assists: 25 },
      { name: "Mar", goals: 35, assists: 30 },
      { name: "Apr", goals: 50, assists: 40 },
    ];
  },
};

export default api;
