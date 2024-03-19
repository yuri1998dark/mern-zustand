import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginHandler = (req: Request, res: Response) => {
  //process request body
  //validating fields
  //store in database
  //generate a token -> specific jsonwebtoken

  const token = jwt.sign({ test: "test" }, "secret", {
    expiresIn: 60 * 60 * 24,
  });
  return res.json({ token });
};

export const profileHandler = (req: Request, res: Response) => {
  return res.json({
    username: req.user,
    message: "Profile view",
  });
};
