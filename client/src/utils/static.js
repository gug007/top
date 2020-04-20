import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { STATIC_URL } = publicRuntimeConfig;

export default url => `${STATIC_URL}/${url}`;
