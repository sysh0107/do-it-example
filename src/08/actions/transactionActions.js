import Api from "../Api";
import { showMessage } from "./notificationActions";
//notificationActions 사용

export const LOADING_TRANSACTION_LIST = "transaction/LOADING_TRANSACTION_LIST";
//로딩상태
export const SET_TRANSACTION_LIST = "transaction/SET_TRANSACTION_LIST";
export const SET_ERROR = "transaction/SET_ERROR";
//에러 메시자 사용
export const TRADE_COMPLETE = "transaction/TRADE_COMPLETE";

//로딩상태 변경 액션 함수
export function loading() {
  return {
    type: LOADING_TRANSACTION_LIST,
  };
}

export function setError(errorMessage) {
  //에러설정
  return {
    type: SET_ERROR,
    payload: { errorMessage },
  };
}

export function setTransactionList(transactions) {
  //서버가 보내준 거래목록 정보 리덕스 스토어에 저장
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  };
}

export function requestTransactionList(params) {
  //params 인자로 받아 실행
  //서버에 거래목록 요청 액션함수
  return (dispatch) => {
    dispatch(loading());
    //requestTransactionList에서 loading 액션함수 호출
    Api.get("/transactions", { params }).then(
      ({ data }) => dispatch(setTransactionList(data)),
      //api.get다음에 dispatch 호출, 액션에 필요한 지연작업 포함가능
      (error) => {
        dispatch(setError(error.response.data.errorMessage));
        //오류가 발생하면 setError 함수 실행
        //error에는 서버의 오류 관련 객체가 있음
        // dispatch(showMessage(error.response.data.errorMessage, true));
        //showMessage는 다른 곳에서 보여줌
        //오류 메시지만 출력하게 true 전달
        //json 서버에서 오류가 발생하면 알림메시지 나옴
      }
    );
  };
}

export function tradeComplete() {
  return { type: TRADE_COMPLETE };
}

export function createTransaction(data, onComplete) {
  //서버에 거래 생성 요청
  return (dispatch) =>
    Api.post("/transactions", data).then(
      ({ data }) => {
        dispatch(tradeComplete());
        onComplete();
      },
      (error) => dispatch(setError(error.response.data.errorMessage))
    );
}
