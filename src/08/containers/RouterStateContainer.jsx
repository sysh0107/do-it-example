import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setLocation } from "../actions/routerActions";
import { withRouter } from "react-router";
import compose from "recompose/compose";

class RouterState extends React.PureComponent {
  componentDidMount() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }
  componentDidUpdate() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }
  render() {
    return null;
  }
}

RouterState.propTypes = {
  setLocation: PropTypes.func,
  location: PropTypes.object,
};

//주소가 변경될 때마다 액션을 호출해서 스토어 데이터 동기화하기
//다중하이어오더 컴포넌트 조합으로 리덕스 액션 호출함수랑 라우터 주소 변경구독기능을 함께 사용함
export default compose(connect(null, { setLocation }), withRouter)(RouterState);
