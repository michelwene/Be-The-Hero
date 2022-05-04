import { GetServerSidePropsContext } from "next";

import axios from "axios";
import { parseCookies } from "nookies";
import url from "../../config/index";

export function setupAPI(ctx?: GetServerSidePropsContext) {
  const { "@auth:accessToken": accessToken } = parseCookies(ctx);

  const api = axios.create({
    baseURL: `${url.URL_BACKEND}/`,
  });

  if (accessToken)
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return api;
}

export const api = setupAPI();

export const setAuthentication = (accessToken: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

export const removeAuthentication = () => {
  api.defaults.headers.common["Authorization"] = "";
};
