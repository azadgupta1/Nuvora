import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import prisma from './prismaClient.js'; // Adjust path as needed
import jwt from 'jsonwebtoken';



console.log("Redirect URI being sent to Google:", `${process.env.BACKEND_URL}/api/auth/google/callback`);


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/google/callback`, // adjust to match your backend route
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        const name = profile.displayName;

        // Check if user exists
        let user = await prisma.user.findUnique({ where: { email } });

        // If not, create the user (you can mark it as Google-auth)
        if (!user) {
          user = await prisma.user.create({
            data: {
              name,
              email,
              password: '', // Optional: leave empty or set flag for Google users
            },
          });
        }

        // You could attach a JWT here if needed
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
          expiresIn: '2d',
        });


        // For debugging 
        console.log("Your token is : ", token);

        // Attach token to user object or session
        done(null, { ...user, token });
      } catch (err) {
        done(err, null);
      }
    }
  )
);

// Serialize and deserialize
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
