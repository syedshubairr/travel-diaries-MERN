import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";

const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

//connections
const uri = `mongodb+srv://syedshubair:shahgee8299@cluster0.1ydn4dn.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000, () =>
      console.log("Connection Successfull and Listening to Port 5000")
    );
  })
  .catch((err) => {
    console.log(err);
  });
