import { connect } from "react-redux";
import Notification from "../../components/main/Notification";
//Notification 사용

const mapStateToProps = (state) => {
  const { hasError, errorMessage } = state.transactions;

  return { hasError, errorMessage };
};

export default connect(mapStateToProps)(Notification);
//오류 메시지랑 Notification컴포넌트 연결하는 데이터 컴포넌트
