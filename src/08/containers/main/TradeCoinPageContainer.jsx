import { connect } from "react-redux";
import TradeCoinPage from "../../components/main/TradeCoinPage";
// import { createTransaction } from '../../actions/transactionActions';
//거래요청액션함수 바뀜
import { createTransaction } from "../../actions/transactionPackActions";

export default connect(null, { createTransaction })(TradeCoinPage);
//데이터 컴포넌트 추가해서 TradeCoinPage프로퍼티로 createTransaction 액션함수 전달

//export default connect(mapStateToProps, { createTransaction })(TradeCoinPage);
//559p 코드와 설명 불일치
//거래 생성 요청 과정에서도 로딩 상태 메시지 출력
//mapStateToProps 추가함
