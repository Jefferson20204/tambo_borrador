import { jwtDecode } from "jwt-decode";

export const isTokenValid = () => {
  const token = localStorage.getItem("authToken");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Hora actual en segundos

    // Comprueba si el token está caducado
    return decoded.exp > currentTime;
  } catch (error) {
    console.error("Invalid token", error);
    return false;
  }
};

// Guarda el token en el navegador
export const saveToken = (token) => {
  localStorage.setItem("authToken", token);
};

// Elimina el token del navegador
export const logOut = () => {
  localStorage.removeItem("authToken");
};

// Obtener token almacenado en el navegador
export const getToken = () => {
  return localStorage.getItem("authToken");
};
