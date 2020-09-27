import { SET_LOCATION } from "../actions/routerActions";
import { setFilter } from "../actions/searchFilterActions";
//쿼리스트링항목 seacrch 값 parse해서 검색 입력값으로 변환
//검색입력변경액션 호출

function parse(qs) {
  //문자 쿼리스트링 -> 객체
  const queryString = qs.substr(1);
  const chunks = queryString.split("&");
  return chunks
    .map((chunk) => chunk.split("="))
    .reduce(
      (result, [key, value]) => ({
        ...result,
        [key]: value,
      }),
      {}
    );
}

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type === SET_LOCATION) {
    //주소 동기화 액션일 때만 작동
    const { pathname, search } = payload.location;
    if (pathname === "/") {
      //경로가 일치할 때만 작동
      store.dispatch(setFilter(parse(search)));
    }
  }
  return result;
};
