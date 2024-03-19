import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;


  if (!authHeader) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  const token = authHeader.split(' ')[1];

  console.log(token);
  if (!token) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  jwt.verify(token, "secret", (err, user) => {
    if (err)
      return res.status(401).json({
        message: "unauthorized",
      });
    req.user = user
    next();
  });


};
