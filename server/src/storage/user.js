import { User } from "../models";
import { hashPassword } from "../utils";

export const get = async () =>
  await User.findAll().map(v => ({
    id: v.id,
    email: v.email,
    createdAt: v.createdAt
  }));

export const getUser = async ({ id, email }) =>
  await User.findOne({ where: { id, email } });

export const findByEmail = email => User.findOne({ where: { email } });

export const create = async ({ email, password }) => {
  if (await User.findOne({ where: { email } })) {
    throw new Error("User exist");
  }

  const passwordHash = await hashPassword(password);
  return await User.create({ email, password: passwordHash });
};

export const createGuest = () => User.create({ email: null, password: "" });
