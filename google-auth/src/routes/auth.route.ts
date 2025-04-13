import express from "express";
import { login } from "../controllers/auth.controller";
import passport from "passport";

const router = express.Router();




router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

export default router;
