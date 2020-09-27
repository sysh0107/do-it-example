import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Toast from "../../../doit-ui/Toast";
//토스트 사용

class Notification extends PureComponent {
  render() {
    //에러 메시지 그리기, 토스트 메시지 사용
    const { hasError, errorMessage } = this.props;
    return hasError && <Toast message={errorMessage} warning />;
  }
}

Notification.propTypes = {
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Notification;
