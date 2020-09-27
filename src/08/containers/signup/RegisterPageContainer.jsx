import { connect } from "react-redux";
import RegisterPage from "../../components/signup/RegisterPage";
import { createUser } from "../../actions/userActions";
import { userCreateLoadingStateSelector } from "../../selectors/userSelectors";

//스토어 데이터와 액션을 Register 컴포넌트와 연결하기 위해 데이터 컴포넌트 추가함
export default connect(
  (state) => ({
    loading: userCreateLoadingStateSelector(state),
  }),
  { createUser }
)(RegisterPage);
