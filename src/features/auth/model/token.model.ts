import Cookies from "js-cookie";
import { apiClient } from "../../../shared/api";

export const setToken = (token: string, refreshToken: string | null = null) => {
  Cookies.set("token", token, { path: "/", secure: true, sameSite: "Strict" });
  if (refreshToken) {
    Cookies.set("refreshToken", refreshToken, {
      path: "/",
      secure: true,
      sameSite: "Strict",
    });
  }
};

export const getToken = () => {
  const token = Cookies.get("token");
  return token;
};

export const removeToken = (refreshToken = false) => {
  Cookies.remove("token");
  if (refreshToken) {
    Cookies.remove("refreshToken");
  }
};

export const getRefreshToken = () => {
  return Cookies.get("refreshToken");
};

export const decodeJwtToken = () => {};

// export const isAuthenticated = async (): Promise<boolean> => {
//   const token = getToken();
//   if (!token) {
//     removeToken(true);
//     return false;
//   }
//   try {
//     const refreshToken = getRefreshToken();
//     if (!refreshToken) {
//       removeToken(true);
//       return false;
//     }
//     try {
//       const { data } = await apiClient.post("/auth/refresh", {
//         refreshToken,
//       });
//       const { accessToken: newToken, refreshToken: newRefreshToken } = data;
//       setToken(newToken, newRefreshToken);
//       return true;
//     } catch (error) {
//       console.error(error);
//       removeToken(true);
//       return false;
//     }
//   } catch (error) {
//     console.error(error);
//     removeToken(true);
//     return false;
//   }
// };
