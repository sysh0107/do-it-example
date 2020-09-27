// import transactions from './transactionsReducer';
//transactions 리듀서 추가
//기존거 뺴고 createReducers넣음
import notification from "./notificationReducer";
//notification 리듀서 추가
import createReducers from "../../11/api-redux-pack/createReducers";
import searchFilter from "./searchFilterReducer";
import router from "./routerReducer";
//주소

const apiReducers = createReducers("transactions", "users");
//575p 책에는 userㄴ가 빠져있음
//회원가입 기능 추가하면서 users 들어감

export default {
  ...apiReducers,
  //createReducers로 만들어진 리듀서 사용함
  notification,
  //알림메시지
  searchFilter,
  //검색정보
  router,
  // location 정보
};
