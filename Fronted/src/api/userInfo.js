import axios from "axios";
import { API_BASE_URL, getHeaders } from "./constant";

// asda
export const fetchUserDetails = async () => {
  const url = API_BASE_URL + "/api/user/profile";
  try {
    const response = await axios(url, {
      method: "GET",
      headers: getHeaders(),
    });
    console.log(response);
    return response?.data;
  } catch (err) {
    throw new Error(err);
  }
};
