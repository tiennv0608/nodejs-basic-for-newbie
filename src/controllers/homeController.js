import pool from "../configs/connectDB";
import multer from "multer";

let getHomePage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `users` ");

  return res.render("index.ejs", { dataUser: rows });
};

let getDetailPage = async (req, res) => {
  let userId = req.params.userId;
  let [user] = await pool.execute("SELECT * FROM users where id = ?", [userId]);
  return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
  console.log("check req", req.body);
  let { firstName, lastName, email, address } = req.body;
  await pool.execute(
    "INSERT INTO users (firstName, lastName, email, address) values (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

let deleteUser = async (req, res) => {
  let userId = req.body.userId;
  await pool.execute("DELETE FROM users where id = ?", [userId]);
  return res.redirect("/");
};

let getEditPage = async (req, res) => {
  let userId = req.params.userId;
  let [user] = await pool.execute("SELECT * FROM users WHERE id = ?", [userId]);
  console.log(user);

  return res.render("update.ejs", { dataUser: user[0] });
};

let postUpdateUser = async (req, res) => {
  let { id, firstName, lastName, email, address } = req.body;
  await pool.execute(
    "UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?",
    [firstName, lastName, email, address, id]
  );
  return res.redirect("/");
};

let getUploadFilePage = async (req, res) => {
  return res.render("uploadFile.ejs");
};

const upload = multer().single("profile_pic");

let handleUploadFile = async (req, res) => {
  upload(req, res, function (err) {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return res.send(err);
    } else if (err) {
      return res.send(err);
    }
    console.log(req);
    res.send(
      `You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="20%"><hr /><a href="/upload">Upload another image</a>`
    );
  });
};

let getAbout = (req, res) => {
  return res.send(`I'm Việt Tiến`);
};

module.exports = {
  getHomePage,
  getAbout,
  getDetailPage,
  createNewUser,
  deleteUser,
  getEditPage,
  postUpdateUser,
  getUploadFilePage,
  handleUploadFile,
};
