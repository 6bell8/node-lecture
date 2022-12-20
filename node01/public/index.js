// 서버 가동에 필요한 것들을 여기에 코딩하면 된다.
// node 설치를 하면 기본적으로 딸려오는 module이 있음.
// 기본 패키지가 있고 설치해서 써야하는 package가 따로 있다.
const http = require("http");
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.write("<h1>hell node</h1>");
  res.end("<p>hell server</p>");
});
server.listen(8080);

server.on("listening", function () {
  console.log("8080에서 서버 대기 중입니다.");
});

server.on("error", function (error) {
  console.log(error);
});
