import createProvider from "../doit-ui/Modal/create";
import { TRADE_COIN_MODAL, REGISTER_USER_MODAL } from "./constants/modals";
//회원가입 모달 사용
// import TradeCoinPage from './components/main/TradeCoinPage01';
//모달 본문 컴포넌트로 사용 TradeCoinPage-> TradeCoinPage로 교체함
import TradeCoinPage from "./containers/main/TradeCoinPageContainer";
import RegisterPage from "./containers/signup/RegisterPageContainer";

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
  [REGISTER_USER_MODAL]: RegisterPage,
});
