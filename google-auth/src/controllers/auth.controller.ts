import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";


export class AuthController {
  constructor( private readonly authService: AuthService ){}

  async login(req:Request, res:Response, next:NextFunction){
    try {
      const service = await this.authService.login();
      res.status(201).json(service);
    } catch (error) {
      next(error);
    }
  }
}

