import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import { IUserData } from "../types/auth";

export function handleRecoverUserDataFromCookies(
  ctx?: GetServerSidePropsContext
) {
  const { "@auth:userData": userData } = parseCookies(ctx);

  if (!userData) return null;

  const userDataJSON: IUserData = JSON.parse(userData);

  return userDataJSON;
}
