import express from "express";
import { createUser } from "./usersController";

const userRouter = express.Router();

userRouter.route("/register").post(createUser);

export default userRouter;
