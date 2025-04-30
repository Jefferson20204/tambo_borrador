import { getToken } from "../utils/jwt-helper";

// URL del backend (Spring Boot)
export const API_BASE_URL = "http://localhost:9090";

export const getHeaders = () => {
  return {
    Authorization: `Bearer ${getToken()}`,
  };
};
