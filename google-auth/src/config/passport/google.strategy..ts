// import database from "../../db";
// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";


// interface GoogleProfile {
//   id: string;
//   displayName: string;
//   emails: { value: string }[];
//   photos?: { value: string }[];
// }

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//       callbackURL: "http://localhost:3000/",
//       passReqToCallback: true,
//     },

//     function ( accessToken: string, refreshToken: string, profile: GoogleProfile, cb: (error: any, user?: any) => void ) {
//       const user
//       User.findFirst({ googleId: profile.id }, function (err, user) {
//         return cb(err, user);
//       });
//     }
//   )
// );
