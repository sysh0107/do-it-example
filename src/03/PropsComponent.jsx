import React, { Component } from "react";
import PropTypes from "prop-types";

class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

// 자료형을 선언하는 예제
PropsComponent.propTypes = {
  // 프로퍼티의 자료형을 객체 형태로 지정하여 Pro.propT에 저장
  name: PropTypes.string,
};

export default PropsComponent;
