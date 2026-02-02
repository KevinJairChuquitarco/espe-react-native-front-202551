import AsyncStorage from "@react-native-async-storage/async-storage";
import { EDPOINTS } from "../config/api";

const KEY = "auth_token";

export const saveToken = async (token) => {
  await AsyncStorage.setItem(KEY, token);
};

export const getToken = async () => {
  return await AsyncStorage.getItem(KEY);
};

export const removeToken = async () => {
  await AsyncStorage.removeItem(KEY);
};

export const loginRequest = async ({ username, password }) => {
  const response = await fetch(`${EDPOINTS.AUTH}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }


  if (!response.ok) {
    const message = data?.message || "Credenciales inválidas";
    throw new Error(message);
  }

  const token =
    typeof data?.token === "string"
      ? data.token
      : typeof data?.accessToken === "string"
      ? data.accessToken
      : null;

  if (!token) {
    throw new Error("La API no devolvió un token válido (string)");
  }

  return token;
};
