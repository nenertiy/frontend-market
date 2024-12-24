import Cookies from "js-cookie";
import { jwtDecode, JwtPayload } from "jwt-decode";

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

interface CustomJwtPayload extends JwtPayload {
  type?: string;
}

export const decodeJwtToken = () => {
  const token = getToken()?.toString();

  if (token) {
    try {
      const decode: CustomJwtPayload = jwtDecode(token);
      return decode.type;
    } catch (error) {
      console.error("Failed to decode JWT:", error);
      console.log("Invalid token format");
    }
  }
};

export const isJwtAuth = (type: "client" | "seller") => {
  const jwtType = decodeJwtToken();
  if (jwtType === type) {
    return true;
  }
};

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
