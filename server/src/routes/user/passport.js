import passport from "passport";

import {
  Strategy as JWTstrategy,
  ExtractJwt as ExtractJWT
} from "passport-jwt";

// TODO: add to env var
export const SECRET_KEY = "SECRET_KEY/NUR";

passport.use(
  new JWTstrategy(
    {
      secretOrKey: SECRET_KEY,
      jwtFromRequest: ExtractJWT.fromHeader("token")
      // jwtFromRequest: ExtractJWT.fromUrlQueryParameter("token")
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
