import fetch from "isomorphic-unfetch";

const request = (url, { method = "GET", body }) => {
  return fetch(url, {
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
};

export const post = (url, options) =>
  request(url, { method: "POST", ...options });

export default request;
