import express from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";

const AuthRoute = express.Router();

const authService = new AuthService();
const authController = new AuthController(authService);


AuthRoute.route("/login").get(authController.login.bind(authController));

export default AuthRoute;