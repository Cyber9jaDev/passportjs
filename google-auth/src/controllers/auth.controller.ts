import { NextFunction, Request, Response } from "express";
import database from "../db";

export const login = async (req: Request, res: Response, next:NextFunction) => {
  const { email, password } = req.body;

  const user = await database.user.findUnique({ where: { email } });

}

