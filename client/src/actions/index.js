import request, { post } from "../../api/request";
import { getCookie, setCookie } from "../utils/cookie";

export const createGuest = () => post(`guest`);
export const isAuthenticated = async () => {
  if (getCookie("token")) {
    return Promise.resolve();
  }

  const { token } = await createGuest();
  setCookie("token", token, { "max-age": 3600 * 24 * 730 });
};

export const loadTag = id => request(`tags/${id}`);
export const loadObjectsByTagId = id => request(`objectsByTagId/${id}`);

export const createLike = async body => {
  await isAuthenticated();
  return post(`objects/like`, { body: body });
};
