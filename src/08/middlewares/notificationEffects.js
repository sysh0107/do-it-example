// import { SET_ERROR } from '../actions/transactionActions';
import { KEY, LIFECYCLE } from "redux-pack";
// import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';
import {
  SHOW_NOTIFICATION,
  showMessage,
  hideMessage,
} from "../actions/notificationActions";
//메시지 숨김기능사용
import { debounce } from "../../02/debounce";

const debounceRunner = debounce((action) => action(), 4000);

// let prevHideCaller;
export default (store) => (nextRunner) => (action) => {
  const { type, payload, meta } = action;
  //SET_ERROR액션 미들웨어에서 처리
  const result = nextRunner(action);
  if (meta && meta.notification) {
    const { success, error } = meta.notification;

    //notification 항목이 포함될 때만 showMessage 출력
    if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
      store.dispatch(showMessage(success));
    }
    //에러 상황 notification 이용해 출력
    else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
      const { errorMessage } = payload.response ? payload.response.data : {};
      store.dispatch(showMessage(errorMessage || error, true));
    }
    // } else if (type === SET_ERROR) {
    //   const { errorMessage } = payload;
    //   store.dispatch(showMessage(errorMessage, true));

    //리덕스 팩 오류 액션 추가
    //액션타입, 메타 값 비교
    //라이프싸이클에 비동기 작업과정 정보가 있어서 라이프사이클 변수와 비교함
    // } else if (type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
    //   const { errorMessage } = payload.response.data;
    //   store.dispatch(showMessage(errorMessage, true));

    //성공 알림창도 위에 내용과 같은 방법으로 메타랑 라이프사이클이랑 비교함
    // } else if (type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
    //   const message = '거래 목록을 최신 정보로 업데이트하였습니다.';
    //   store.dispatch(showMessage(message));
  } else if (type === SHOW_NOTIFICATION) {
    //SHOW_NOTIFICATION타입이면 숨김액션이 4초후 message 빈 값으로 바꿈
    const hide = () => store.dispatch(hideMessage());
    // setTimeout(hide, 4000);
    debounceRunner(hide);
    //디바운스로 함수 마지막 호출함수 시간으로 효과 적용
    //여러 번 호출 안됨
  }
  return result;
};
