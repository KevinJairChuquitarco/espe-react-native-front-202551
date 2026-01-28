import AsyncStorage from "@react-native-async-storage/async-storage";
import { EDPOINTS } from "../config/api";

const key = "auth_token";

export const saveToken = async (token) => {
  return await AsyncStorage.getItem(key, token);
};

export const getToken = async () => {
  await AsyncStorage.setItem(key, token);
};

export const removeToken = async () => {
  await AsyncStorage.removeItem(key);
};

export const loginRequest = async ({ username, password }) => {
  try {
    const response = await fetch(`${EDPOINTS.AUTH}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (!response.ok) {
      let msg = "Credenciales inválidas";
      try {
        const data = await res.json();
        msg = data?.message ?? msg;
      } catch {}
      throw new Error(msg);
    }

    const data = await res.json();

    const token = data?.token || data?.accessToken; 
    if (!token) throw new Error("La API no devolvió token");

    return token;
  } catch (error) {
    console.log(error);
  }
};
