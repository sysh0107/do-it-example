export const SET_FILTER = "searchFilter/SET_FILTER";
export const RESET_FILTER = "searchFilter/RESET_FILTER";

//리덕스에 검색 정보 저장을 위해 검색정보를 위한 액션 추가
export function setFilter(params) {
  return {
    type: SET_FILTER,
    payload: { params },
  };
}

export function resetFilter() {
  return {
    type: RESET_FILTER,
  };
}
