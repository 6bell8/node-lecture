const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const axios = require("axios");

app.set("port", process.env.PORT || 8099);
app.use(cors());

app.get("/items", (req, res) => {
  //db에 연결하고 데이터 긁어와서 json으로 return
  res.json([
    {
      imgSrc: "http://gdimg.gmarket.co.kr/2522773369/still/600?ver=1661741861",
      title: "삼육두유",
      price: "13,000",
    },
    {
      imgSrc: "http://gdimg.gmarket.co.kr/2522773369/still/600?ver=1661741861",
      title: "서울우유",
      price: "21,100",
    },
    {
      imgSrc: "http://gdimg.gmarket.co.kr/2522773369/still/600?ver=1661741861",
      title: "파스퇴르 맛있는우유",
      price: "19,200",
    },
    {
      imgSrc: "http://gdimg.gmarket.co.kr/2522773369/still/600?ver=1661741861",
      title: "맛있는우유 맛있는우유",
      price: "19,200",
    },
  ]);
});

const PORT = app.get("port");

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
