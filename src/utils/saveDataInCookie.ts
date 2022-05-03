import { setCookie } from "nookies";

interface ISaveDataInCookieProps {
  keyCookie: string;
  data: string;
  time?: number;
}

export function handleSaveDataInCookie({
  keyCookie,
  data,
}: ISaveDataInCookieProps) {
  setCookie(undefined, `@auth:${keyCookie}`, data, {
    path: "/",
  });
}
