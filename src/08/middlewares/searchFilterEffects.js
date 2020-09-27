import { SET_FILTER } from "../actions/searchFilterActions";
import {
  requestTransactionList,
  resetTransactionList,
} from "../actions/transactionPackActions";

//검색필터 변경이 생길 때 자동으로 검색 결과 요청
export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type === SET_FILTER) {
    const { params } = payload || {};
    store.dispatch(resetTransactionList());
    //검색필터 변경이 생길 때 자동으로 검색 결과 요청
    store.dispatch(requestTransactionList(params));
    //requestTransactionList 검색결과 요청 전 현재 겸색 목록 초기화
  }
  return result;
};
