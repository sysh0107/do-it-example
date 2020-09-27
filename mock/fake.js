const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = 4000;

server.use(middlewares);
server.use((req, res) => {
  //모든 요청에 500오류를 에러메시지하고 응답함
  res.status(500).jsonp({
    errorMessage: "문제가 발생했습니다",
  });
});
server.listen(port);
//4000번 포트 가상 데이터 서버 구동
