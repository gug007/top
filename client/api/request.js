import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { SERVER_HOST } = publicRuntimeConfig;
const ROOT_API = `http://${SERVER_HOST || "localhost:4010"}/`;

export default async endpoint => {
  const res = await fetch(`${ROOT_API}${endpoint}`);
  return await res.json();
};
