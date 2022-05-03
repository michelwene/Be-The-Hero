import React from "react";

export const normalizePhoneNumber = (value: string | undefined) => {
  if (!value) return "";

  return value
    .replace(/[\D]/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)/, "$1");
};

export const currencyMask = (value: string | undefined) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2})$/, "$1.$2")
    .replace(/(?=(\d{3})+(\D))\B/g, ",");
};
