import { Router } from "express";
import { getAllUsers } from "../controller/user-controllers";

const userRouter = Router();

userRouter.get("/", getAllUsers);

export default userRouter;
