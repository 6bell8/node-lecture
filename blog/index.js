const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const path = require("path");
const multer = require("multer");
const cloudinary = require("cloudinary");
const MongoClient = require("mongodb").MongoClient;
let db = null;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false })); // post에서 보낸 데이터 req.body로 받을려면 있어야함
app.use(express.static(path.join(__dirname, "/public")));
app.use("/upload", express.static(path.join(__dirname, "/upload")));
app.set("port", process.env.PORT || 8099);
const PORT = app.get("port");

MongoClient.connect(`mongodb+srv://parkgutime:${process.env.Mongo_URL}@cluster0.jmdlgc1.mongodb.net/?retryWrites=true&w=majority`, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log(err);
  }
  db = client.db("crud");
  // console.log("db", db);
});

module.exports = db;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_COUND_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.diskStorage({
  // destination: (req, file, done) => {
  //   done(null, path.join(__dirname, "/upload"));
  // },
  // filename: (req, file, done) => {
  //   done(null, file.originalname);
  // },
});

const fileUpload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index", { title: "우당탕탕 우영우" });
});

app.get("/insert", (req, res) => {
  res.render("insert", { title: "글쓰기" });
});

//여기선 입력만 되면 된다.
app.post("/register", fileUpload.single("image"), (req, res) => {
  const title = req.body.title;
  const date = req.body.date;
  const category = Array.isArray(req.body.category) ? req.body.category.join(" ") : req.body.category;
  const desc = req.body.desc;
  const point = req.body.point;
  const image = req.file.filename;
  cloudinary.uploader.upload(req.file.path, (result) => {
    db.collection("blog").insertOne({
      title: title,
      date: date,
      category: category,
      desc: desc,
      point: point,
      image: result.url,
    });
    res.send("잘 들어갔습니다.");
  });
});

app.get("/list", (req, res) => {
  db.collection("blog")
    .find()
    .toArray((err, result) => {
      console.log(result);
      res.render("list", { title: "list", list: result });
    });
});
app.get("/detail/:title", (req, res) => {
  const title = req.params.title;
  db.collection("blog").findOne({ title: title }, (err, result) => {
    if (result) {
      res.render("detail", { title: "detail", data: result });
    }
  });
});

app.post("/summerNoteInsertImg", fileUpload.single("summerNoteImg"), (req, res) => {
  cloudinary.uploader.upload(req.file.path, (result) => {
    res.json({ cloudinaryImgSrc: result.url });
  });
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버대기중`);
});
