import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "./routes/user/passport";

const signToken = user => {
  const body = { id: user.id, email: user.email };
  return jwt.sign({ user: body }, SECRET_KEY);
};

const hashPassword = async password => {
  if (!password) {
    throw new Error("Password was not provided");
  }

  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const verifyPassword = async (candidate, actual) => {
  return await bcrypt.compare(candidate, actual);
};

export { signToken, hashPassword, verifyPassword };
