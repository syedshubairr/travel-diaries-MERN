import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
const app = express();
dotenv.config();
// middleware

app.use("/user", userRouter);

//connections

mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://syedshubair:shahgee8299@cluster0.1ydn4dn.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000, () =>
      console.log("Connection Successfull and Listening to Port 5000")
    );
  })
  .catch((err) => {
    console.log(err);
  });
