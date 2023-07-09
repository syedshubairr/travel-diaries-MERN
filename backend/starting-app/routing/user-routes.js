import { Router } from "express";
import { getAllUsers, login, signup } from "../controller/user-controllers";

const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.post("/signup", signup);

userRouter.post("/login", login);

export default userRouter;
