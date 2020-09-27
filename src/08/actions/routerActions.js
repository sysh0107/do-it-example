export const SET_LOCATION = "router/SET_LOCATION";

//쿼리스트링 검색결과 화면 보여줌
//location으로 전달받은 주소 정보를 스토어 데이터에 전달
export function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: { location },
  };
}
