const {
  cloudinaryUploadImg,
  cloudinaryDeleteImg,
} = require("../utils/cloudinary");
const fs = require("fs");
const asyncHandler = require("express-async-handler");



const uploadImages = asyncHandler(async (req, res) => {
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      // console.log(newpath);
      urls.push(newpath);
      console.log(file);
      fs.unlink(file.path, (err) => {
        if (err) {
          console.error(`Error deleting file: ${err}`);
        } else {
          console.log(`File deleted: ${path}`);
        }
      });
    }
    const images = urls.map((file) => {
      return file;
    });
    res.json(images);
  } catch (error) {
    throw new Error(error);
    // console.error(error);
    // res.status(500).json({ error: "Internal Server Error" });
  }
});
const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const uploader = cloudinaryDeleteImg(id, "images");
    res.json({ message: "Deleted" });
  } catch (error) {
    throw new Error(error);
    // console.error(error);
    // res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  uploadImages,
  deleteImages,
};
