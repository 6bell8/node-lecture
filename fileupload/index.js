const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const path = require("path");
const multer = require("multer");
const cloudinary = require("cloudinary");

const MongoClient = require("mongodb").MongoClient;
let db = null;
MongoClient.connect(process.env.MONGO_URL, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log(err);
  }
  db = client.db("crud");
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false })); // post에서 보낸 데이터 req.body로 받을려면 있어야함
app.use(express.static(path.join(__dirname, "/public")));
app.use("/upload", express.static(path.join(__dirname, "/upload")));

app.set("port", process.env.PORT || 8099);
const PORT = app.get("port");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_COUND_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.diskStorage({
  destination: (req, file, done) => {
    done(null, path.join(__dirname, "/upload"));
  },
  filename: (req, file, done) => {
    // console.log(file);
    done(null, file.originalname);
  },
});
const fileUpload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("hello node");
});
app.get("/insert", (req, res) => {
  res.render("insert", { title: "insert" });
});

//중간에 하나 더 들어가는 미들웨어(fileUpload)를 추가해야 eync type에서 넘어오는 form이 보임

app.post("/register", fileUpload.single("poster"), (req, res) => {
  const movieTitle = req.body.movieTitle;
  const date = req.body.date;
  const genre = req.body.genre;
  const desc = req.body.desc;
  const point = req.body.point;

  //   console.log(movieTitle);
  //   console.log(date);
  //   console.log(genre);
  //   console.log(desc);
  //   console.log(point);
  //   console.log(req.file); //poster /type = file 형식으로 보내짐
  // db에 파일을 저장하는 두가지 방법,, text로 바꿔서 저장
  // db에다가 경로만 저장하는 방법

  cloudinary.uploader.upload(req.file.path, (result) => {
    console.log(result);
    db.collection("movie").insertOne({
      movieTitle: movieTitle,
      date: date,
      genre: genre,
      desc: desc,
      point: point,
      poster: result.url,
    });
  });
  res.send("파일 전송 완료");
});

app.get("/list", (req, res) => {
  res.render("list", {
    list: [
      {
        title: "탑건",
        date: "2022/08/10",
        genre: "스릴러",
        desc: "매버릭",
        point: "4.5",
        poster: "https://res.cloudinary.com/ddwyjlwg4/image/upload/v166122236b70crz1pxvoubx.png',1/g0h1udb70crz1pxvoubx.png",
      },
      {
        title: "매버릭",
        date: "2022/08/10",
        genre: "스릴러",
        desc: "매버릭",
        point: "4.3",
        poster: "https://res.cloudinary.com/ddwyjlwg4/image/upload/v166122236b70crz1pxvoubx.png',1/g0h1udb70crz1pxvoubx.png",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버대기중`);
});
