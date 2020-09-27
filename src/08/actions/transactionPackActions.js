// import Api from '../Api';
import createActions from "../../11/api-redux-pack/createActions";
import { paginationSelector } from "../selectors/transactionSelectors";

const { collection, create, reset } = createActions("transactions");
//액션함수 변경됨

export const resetTransactionList = reset;
export const FETCH_TRANSACTION_LIST = "transaction/FETCH_TRANSACTION_LIST";
export const FETCH_TRANSACTION = "transaction/FETCH_TRANSACTION";
export const UPDATE_TRANSACTION = "transaction/UPDATE_TRANSACTION";
export const CREATE_TRANSACTION = "transaction/CREATE_TRANSACTION";

//거래 목록 요청 액션이 실해팼을 때만 알림을 표시, 오류 메시지를 액션 함수에 정의
//메타에 오류 메시지 추가, 오류 발생하면 값 출력
// export function _requestTransactionList(params) {
//   return {
//     type: FETCH_TRANSACTION_LIST,
//     promise: Api.get('/transactions', { params }),
//     meta: {
//       notification: {
//         success: '거래 목록을 최신 정보로 업데이트하였습니다.',
//         error: '거래 목록을 갱신하는 중에 문제가 발생하였습니다.',
//       },
//     },
//   };
// }

//서버에서 10개 코인 목록만 요청
// const PAGE_SIZE = 10;
// export function requestTransactionList(params, _page = 1) {
//   return {
//     type: FETCH_TRANSACTION_LIST,
//     promise: Api.get('/transactions', {
//axois는 값을 자동인식해서 주소에 값 추가
//       params: {
//         ...params,
//         _page,
//         _limit: PAGE_SIZE,
//       },
//     }),
//     meta: {
//       pageNumber: _page,
//       pageSize: PAGE_SIZE,
//       notification: {
//         success: '거래 목록을 최신 정보로 업데이트하였습니다.',
//         error: '거래 목록을 갱신하는 중에 문제가 발생하였습니다.',
//       },
//     },
//   };
// }

// export function createTransaction(data, onComplete) {
//모달 닫힘 기능을 onSuccess로 구현함
//   return {
//     type: CREATE_TRANSACTION,
//     promise: Api.post('/transactions', data),
//액션에 promise 추가되면 비동기 상태 처리

//     meta: {
//       onSuccess: onComplete,
//       notification: {
//         success: '거래가 성공적으로 완료되었습니다',
//       },
//     },
//   };
// }

const PAGE_SIZE = 10;
export function requestTransactionList(params, _page = 1) {
  const meta = {
    pageNumber: _page,
    pageSize: PAGE_SIZE,
    notification: {
      success: "거래 목록을 최신 정보로 업데이트하였습니다.",
      error: "거래 목록을 갱신하는 중에 문제가 발생하였습니다.",
    },
  };
  return collection(
    {
      ...params,
      _page,
      _limit: PAGE_SIZE,
    },
    meta
  );
}

//거래요청함수에 알림 메시지 추가
export function createTransaction(data, onComplete) {
  const meta = {
    onSuccess: onComplete,
    notification: {
      success: "거래가 성공적으로 완료되었습니다",
    },
  };

  return create(data, {}, meta);
}
