import AsyncStorage from "@react-native-async-storage/async-storage";
import { EDPOINTS } from "../config/api";

const KEY = "auth_token";

/* =========================
   STORAGE DEL TOKEN (STRING)
   ========================= */

export const saveToken = async (token) => {
  if (!token || typeof token !== "string") {
    throw new Error("El token a guardar no es un string");
  }
  await AsyncStorage.setItem(KEY, token);
};

export const getToken = async () => {
  return await AsyncStorage.getItem(KEY);
};

export const removeToken = async () => {
  await AsyncStorage.removeItem(KEY);
};

/* =========================
   LOGIN (JWT)
   ========================= */

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

  // Intentamos leer la respuesta como JSON (incluso si es error)
  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  // Error del backend
  if (!response.ok) {
    const message = data?.message || "Credenciales inválidas";
    throw new Error(message);
  }

  /*
    🔴 AJUSTE CLAVE
    Aseguramos que el token sea STRING
    Cambia esta línea SOLO si tu backend usa otro nombre
  */
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
