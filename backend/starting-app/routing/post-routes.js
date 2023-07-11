import { Router } from "express";
import {
  addPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePost,
} from "../controller/post-controllers";

const postRouter = Router();

postRouter.get("/", getAllPost);
postRouter.post("/", addPost);
postRouter.get("/:id", getPostById);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;
