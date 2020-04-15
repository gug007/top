import { User } from "../models";
import bcrypt from "bcrypt";

export const get = async ({ email }) =>
  await User.findOne({ where: { email } });

export const create = async ({ email, password }) => {
  if (await User.findOne({ where: { email } })) {
    return { error: "user.emailExist" };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: passwordHash });

  return {
    message: "Signup successful"
    // user
  };
};
