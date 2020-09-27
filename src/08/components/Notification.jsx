import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Toast from "../../doit-ui/Toast";

class Notification extends PureComponent {
  //state.notification 데이터 컴포넌트 프로퍼티에 맞게 함
  render() {
    const { showMessage, message, warning } = this.props;
    return showMessage && <Toast message={message} warning={warning} />;
  }
}

Notification.propTypes = {
  showMessage: PropTypes.bool,
  warning: PropTypes.bool,
  message: PropTypes.string,
};

export default Notification;
