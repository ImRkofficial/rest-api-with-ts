import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  // Validation
  if (!email || !name || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  const user = await userModel.findOne({ email });

  if (user) {
    const error = createHttpError(400, "User already exist with this email.");
    return next(error);
  }

  const hashPassword = await bcrypt.hash(password, 10);
  res.json({
    message: "User created",
  });
};

export { createUser };
