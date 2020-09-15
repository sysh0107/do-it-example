// // 필수 리액트 구동 모듈
import React from "react";
import ReactDOM from "react-dom";
// // 초기 화면을 구성하는 사용자 코드
import App from "./App";
// // 리액트 엔진이 화면을 출력
// // id가 root인 엘리먼트에 컴포넌트를 출력
ReactDOM.render(<App />, document.getElementById("root"));
