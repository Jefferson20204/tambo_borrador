import axios from "axios";
import { API_BASE_URL } from "./constant";

// Funcion para iniciar sesion
export const loginAPI = async (body) => {
  const url = API_BASE_URL + "/api/auth/login";
  try {
    const response = await axios(url, {
      method: "POST",
      data: body,
    });
    return response?.data;
  } catch (err) {
    if (err.response && err.response.data) {
      throw err.response.data; // Devuelve lo que Spring te envió
    } else {
      throw err; // O el error original si no hay respuesta
    }
  }
};

// Funcion para registrar un nuevo usuario
export const registerAPI = async (body) => {
  const url = API_BASE_URL + "/api/auth/register";
  try {
    const response = await axios(url, {
      method: "POST",
      data: body,
    });
    return response?.data;
  } catch (err) {
    if (err.response && err.response.data) {
      throw err.response.data;
    } else {
      throw err;
    }
  }
};

// Funcion para verificar el email
export const verifyAPI = async (body) => {
  const url = API_BASE_URL + "/api/auth/verify";
  try {
    const response = await axios(url, {
      method: "POST",
      data: body,
    });
    return response?.data;
  } catch (err) {
    if (err.response && err.response.data) {
      throw err.response.data;
    } else {
      throw err;
    }
  }
};

// Función para enviar el correo de restablecimiento de contraseña
export const sendResetPasswordEmailAPI = async (email) => {
  const url = API_BASE_URL + "/api/auth/forgot-password";
  try {
    const response = await axios(url, {
      method: "POST",
      data: { email },
    });
    return response?.data;
  } catch (err) {
    if (err.response && err.response.data) {
      throw err.response.data;
    } else {
      throw err;
    }
  }
};

// Función para resetear la contraseña
export const resetPasswordAPI = async (token, newPassword) => {
  const url = API_BASE_URL + "/api/auth/reset-password";
  try {
    const response = await axios(url, {
      method: "POST",
      data: {
        token,
        newPassword,
      },
    });
    return response?.data;
  } catch (err) {
    if (err.response && err.response.data) {
      throw err.response.data;
    } else {
      throw err;
    }
  }
};
