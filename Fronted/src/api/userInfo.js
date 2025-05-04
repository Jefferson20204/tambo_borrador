// Importa Axios para hacer solicitudes HTTP
import axios from "axios";

// Importa la URL base del backend y los headers con el token JWT
import { API_BASE_URL, getHeaders } from "./constant";

// Función asincrónica para obtener los detalles del usuario autenticado desde el backend
export const fetchUserDetails = async () => {
  // Construye la URL completa del endpoint de perfil de usuario
  const url = API_BASE_URL + "/api/user/profile";

  try {
    // Realiza la petición GET con encabezados de autorización (JWT)
    const response = await axios(url, {
      method: "GET",
      headers: getHeaders(),
    });

    // Imprime la respuesta en consola (útil para depuración)
    console.log(response);

    // Retorna los datos obtenidos del backend
    return response?.data;
  } catch (err) {
    // Si ocurre un error, lanza una excepción con el mensaje del error
    throw new Error(err);
  }
};
