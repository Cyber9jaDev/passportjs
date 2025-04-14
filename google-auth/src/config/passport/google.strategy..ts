import { Request } from "express";
import database from "../../db";
import passport from "passport";
import {
  GoogleCallbackParameters,
  Strategy as GoogleStrategy,
  Profile,
  VerifyCallback,
} from "passport-google-oauth20";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "http://localhost:3000/",
      passReqToCallback: true,
    },

    async (
      req: Request,
      accessToken: string,
      refreshToken: string,
      params: GoogleCallbackParameters,
      profile: Profile,
      done: VerifyCallback
    ) => {
      try {
        const email = profile?.emails?.[0].value;
        if (!email) {
          return done(new Error("No email provided by google"));
        }

        // Check for existing user by Google ID first
        const existingByGoogleId = await database.user.findUnique({
          where: { googleId: profile.id },
        });

        const existingUser = await database.user.findFirst({
          where: {
            OR: [{ email, googleId: profile.id }],
          },
        });

        if (existingUser) {
          // Update googleId if not set
          if (!existingUser.googleId) {
            const updatedUser = await database.user.update({
              where: { id: existingUser.id },
              data: { googleId: profile.id },
            });
            return done(null, updatedUser);
          }
          return done(null, existingUser);
        }

        // Create new user
        const newUser = await database.user.create({
          data: {
            googleId: profile.id,
            email,
            firstName: profile.name?.givenName,
            lastName: profile.name?.familyName,
            avatar: profile.photos?.[0].value,
          },
        });

        return done(null, newUser);
      } catch (error) {
        return done(error as Error);
      }
    }
  )
);

// passport.serializeUser(function (user, cb) {
//   process.nextTick(function () {
//     cb(null, { id: user.id,  firstName: user.firstName });
//   });
// });

// passport.deserializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });
