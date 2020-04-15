import dotenv from "dotenv";
const appEnv = dotenv.config();

export const APP_PORT = appEnv.parsed.APP_PORT || 4010;
