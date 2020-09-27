import axios from "axios";

const isDev = process.env.NODE_ENV === "development";
const Api = axios.create({
  //주소 적어놓고 설정값 공유함
  baseURL: isDev ? "http://localhost:4000/" : "/api/",
});

export default Api;
