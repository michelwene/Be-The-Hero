import { AxiosError } from "axios";
import { api, setAuthentication } from "../client/api";
import { IPayloadSignIn, IUserData } from "../../types/auth";
import { handleSaveDataInCookie } from "../../utils/saveDataInCookie";

class AuthService {
  async signIn(payload: IPayloadSignIn): Promise<void> {
    try {
      const { data } = await api.post<IUserData>("/signin", payload);

      setAuthentication(data.accessToken);

      handleSaveDataInCookie({
        keyCookie: "userData",
        data: JSON.stringify(data),
      });
      handleSaveDataInCookie({
        keyCookie: "accessToken",
        data: data.accessToken,
      });
    } catch (err) {
      const error = err as AxiosError;

      if (error.isAxiosError) {
        switch (error.response?.status) {
          case 400:
            throw new Error("Usuário ou senha inválidos");
          case 401:
            throw new Error("Email e/ou senha incorretos.");
          case 500:
            throw new Error("Infelizmente, algo deu errado.");
          default:
            throw new Error(error.response?.statusText);
        }
      }

      throw new Error(error.message);
    }
  }
}

const authService = new AuthService();

export { authService };
