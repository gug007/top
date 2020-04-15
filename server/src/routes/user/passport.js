import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {
  Strategy as JWTstrategy,
  ExtractJwt as ExtractJWT
} from "passport-jwt";
import { User } from "../../models/index";
import * as user from "../../storage/user";

export const SECRET_KEY = "SECRET_KEY/NUR";

passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      try {
        const data = await user.create({ email, password });
        return done(null, data);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          return done(null, false, { message: "User not found" });
        }
        const validate = await bcrypt.compare(password, user.password);
        if (!validate) {
          return done(null, false, { message: "Wrong Password" });
        }
        return done(null, user, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

// This verifies that the token sent by the user is valid
passport.use(
  new JWTstrategy(
    {
      secretOrKey: SECRET_KEY,
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("token")
    },
    async (token, done) => {
      try {
        // Pass the user details to the next middleware
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
