const express = require("express");
const { isAbsolute } = require("path");
const path = require("path"); // 기본 모듈
const app = express();
console.log(path);

app.use(express.static(path.join(__dirname, "/public")));
//반드시 세팅해서 사용하면 좋다. 파일 위치 지정할 때 .붙히는게 좋음
//.use는 정적인 파일일 때 사용
//라우팅, 서버에 요청이 들어오면 보여주는 기능 직접 호출하는 live server같은 기능이 아님

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});
app.get("/greeting", (req, res) => {
  res.sendFile(path.join(__dirname, "/greeting.html"));
});
app.get("/introduce", (req, res) => {
  res.sendFile(path.join(__dirname, "/introduce.html"));
});
app.get("/location", (req, res) => {
  res.sendFile(path.join(__dirname, "/location.html"));
});

app.listen(8099, () => {
  console.log("8099 포트에서 express 서버 대기 중입니다.");
});

//대부분 node express에서 서버를 만듦
