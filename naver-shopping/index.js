const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.set("port", 8099);
app.use(cors());

//라우팅
app.get("/", (req, res) => {
  res.send("안녕 만나서 방가오");
});
app.get("/book/:bookname", (req, res) => {
  const queryTxt = encodeURIComponent(req.params.bookname);
  //   console.log(req.params.bookname); //뒤에 : 찍을 때는 params으로 받으면 됨
  axios({
    url: `https://openapi.naver.com/v1/search/book.json?query=${queryTxt}`,
    headers: {
      "X-Naver-Client-Id": "dyrXwu8NXTgGl7I47uEf",
      "X-Naver-Client-Secret": "ezetolH8Wg",
    },
  }).then(function (response) {
    // console.log(response.data);
    res.json(response.data);
  });
});

//중간 대리인
app.get("/shopping", (req, res) => {
  const queryTxt = encodeURIComponent(req.query.itemname);
  axios({
    url: `https://openapi.naver.com/v1/search/shop.json?query=${queryTxt}`,
    headers: {
      "X-Naver-Client-Id": "dyrXwu8NXTgGl7I47uEf",
      "X-Naver-Client-Secret": "ezetolH8Wg",
    },
  }).then(function (response) {
    res.json(response.data);
  });
});

app.get("/news/:itemname", (req, res) => {
  const queryTxt = encodeURIComponent(req.params.bookname);

  axios({
    url: `https://openapi.naver.com/v1/search/news.json?query=${queryTxt}&display=100`,
    headers: {
      "X-Naver-Client-Id": "dyrXwu8NXTgGl7I47uEf",
      "X-Naver-Client-Secret": "ezetolH8Wg",
    },
  }).then(function (response) {
    res.json(response.data);
  });
});

app.get("/login", (req, res) => {
  console.log(req.query);

  if (req.query.id === "parkgu" && req.query.pw === "1234") {
    res.json({ isLogged: true });
  } else {
    res.json({ isLogged: false });
  }
});

app.listen(8099, function () {
  console.log("8099에서 서버 대기 중");
});
