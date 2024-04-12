import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./users/usersRoutes";

const app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
  res.json({ message: "Hello world" });
});

app.use("/api/users", userRouter);

app.use(globalErrorHandler);

export default app;
