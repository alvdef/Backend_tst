import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { config } from "dotenv";

config();

const emails = ["gariiarellano01@gmail.com"];

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth-google/google",
    },
    function (accessToken, refreshToken, profile, done) {
      // Realizamos una consulta a la BBDD para comprobar si está el usuario.
      const exists = emails.includes(profile.emails[0].value);
      if (!exists) {
        emails.push(profile.emails[0].value); // En caso de que no exista ya, lo guardamos en la BBDD.
      }
      console.log(profile);
      done(null, profile); // Se coloca la información del usuario en el objeto req.user
    },
  ),
);
