import { THuman } from "../types";

export const getHumanIdFromUrl = (url: THuman["url"]) => {
  return url.split("/")[5];
};
