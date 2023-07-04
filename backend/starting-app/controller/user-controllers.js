import User from "../models/User";

export const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
  }
  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  res.status(200).json({ users });
};
