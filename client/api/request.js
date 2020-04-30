import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";

const { publicRuntimeConfig } = getConfig();
const { SERVER_HOST } = publicRuntimeConfig;
const ROOT_API = `http://${SERVER_HOST || "localhost:4010"}`;

const request = async (endpoint, options) => {
  const ROOT = isBrowser
    ? `${window.location.protocol}//api.${window.location.hostname}`
    : ROOT_API;
  const res = await fetch(`${ROOT}/${endpoint}`, options);
  return await res.json();
};

export const post = (endpoint, options = {}) =>
  request(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options.body)
  });

export default request;
