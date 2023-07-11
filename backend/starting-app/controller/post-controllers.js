import Post from "../models/Post";

export const getAllPost = async (req, res) => {
  let posts;
  try {
    posts = await Post.find();
  } catch (error) {
    return console.log(error);
  }

  if (!posts) {
    res.status(500).json({ message: "Unexpected Error Occurs" });
  }
  res.status(200).json({ posts });
};

export const addPost = async (req, res) => {
  const { title, description, image, location, date, user } = req.body;
  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !date &&
    !user &&
    !image &&
    image.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }
  let post;
  try {
    post = new Post({
      title,
      description,
      image,
      location,
      date: new Date(`${date}`),
      user,
    });
    post = await post.save();
  } catch (error) {
    console.log(error);
  }

  if (!post) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(201).json({ post });
};

export const getPostById = async (req, res) => {
  const id = req.params.id;
  let post;
  try {
    post = await Post.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(404).json({ message: "No Post Found" });
  }
  return res.status(200).json({ post });
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, description, image, location, date } = req.body;
  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !date &&
    !image &&
    image.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }
  let post;
  try {
    post = await Post.findByIdAndUpdate(id, {
      title,
      description,
      image,
      location,
      date: new Date(`${date}`),
    });
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(500).json({ message: "Unable to Update" });
  }
  return res.status(200).json({ message: "Update Successfull" });
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  let post;
  try {
    post = await Post.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(500).json({ message: "Unable to delete" });
  }
  return res.status(200).json({ message: "Deleted Successfully" });
};
