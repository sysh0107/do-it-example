import { SET_FILTER, RESET_FILTER } from "../actions/searchFilterActions";

const initState = {
  params: {},
};

//리덕스에 검색 정보 저장을 위해 검색정보를 위한 액션 추가
export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTER: {
      const { params } = payload;
      return { ...state, params };
    }
    case RESET_FILTER: {
      return { ...initState };
    }
    default:
      return state;
  }
};
