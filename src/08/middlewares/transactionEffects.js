import {
  TRADE_COMPLETE,
  requestTransactionList,
} from "../actions/transactionActions";
//거래가 완료되면 행동
import { showMessage } from "../actions/notificationActions";

export default (store) => (nextRunner) => (action) => {
  const { type } = action;
  const result = nextRunner(action);
  if (type === TRADE_COMPLETE) {
    const message = "거래 목록을 최신 정보로 업데이트하였습니다.";
    store.dispatch(showMessage(message));
    //거래성공메시지 출력
    store.dispatch(requestTransactionList());
    //requestTransactionList가 변경된 거래 목록 요청
  }
  return result;
};
