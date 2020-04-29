import passport from "passport";
import * as storage from "../../storage/user";
import { signToken, verifyPassword } from "../../utils";

export const auth = passport.authenticate("jwt", { session: false });

export const get = async (req, res) => {
  const users = await storage.get();
  return res.json({ users });
};

export const getUser = async (req, res) => {
  const user = await storage.getUser({
    id: req.user.id,
    email: req.user.email
  });
  return res.json({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });
};

export const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await storage.create({ email, password });
    res.json({ message: "Signup successful", id: data.id });
  } catch (error) {
    res.status(500).json({ error: "Email already exist" });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await storage.findByEmail(email);
    const validate = await verifyPassword(password, user.password);
    if (!user || !validate) {
      res.status(500).json({ error: "Wrong password or email" });
    }
    req.login(user, { session: false }, async error => {
      if (error) return next(error);
      return res.json({ token: signToken(user) });
    });
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
};

export const guest = async (req, res, next) => {
  const user = await storage.createGuest();
  // TODO: remove id
  return res.json({ id: user.id, token: signToken(user) });
};
