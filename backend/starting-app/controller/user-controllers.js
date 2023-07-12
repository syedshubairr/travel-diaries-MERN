import { compareSync, hashSync } from "bcryptjs";
import User from "../models/User";

export const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    return console.log(error);
  }
  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  // implement formik in react frontend.
  const { name, email, password } = req.body;
  const isExist = await User.find({ email });
  if (isExist && isExist.length) {
    return res.status(400).json({ message: "User Already Exist" });
  }
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }
  const hashedPassword = hashSync(password);
  let user;
  try {
    user = new User({ email, name, password: hashedPassword });
    await user.save();
  } catch (error) {
    return console.log(error);
  }
  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }
  let oldUser;
  try {
    oldUser = await User.findOne({ email });
  } catch (error) {
    return console.log(error);
  }
  if (!oldUser) {
    return res.status(404).json({ message: "No user Found" });
  }
  const isCorrectPassword = compareSync(password, oldUser.password);
  if (!isCorrectPassword) {
    return res.status(400).json({ message: "Incorrect Password or Email" });
  } else {
    return res
      .status(200)
      .json({ id: oldUser._id, message: "Login Successfull" });
  }
};
