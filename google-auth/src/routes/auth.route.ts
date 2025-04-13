import express from "express";
import { login } from "../controllers/auth.controller";

const AuthRoute = express.Router();

AuthRoute.route("/login").post(login);

export default AuthRoute;