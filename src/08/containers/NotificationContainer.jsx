import { connect } from "react-redux";
import Notification from "../components/Notification";
//Notification 사용

const mapStateToProps = (state) => {
  //Notification 컴포넌트, 리듀서 연결해서 데이터 컴포넌트
  const { showMessage, message, warning } = state.notification;
  //state.notification 알림과 관련있는 데이터만 따로 참조

  return { showMessage, message, warning };
};

export default connect(mapStateToProps)(Notification);
