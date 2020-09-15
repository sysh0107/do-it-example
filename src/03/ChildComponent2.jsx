import React, { Component } from "react";
import PropTypes from "prop-types";

class ChildComponent2 extends Component {
  render() {
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        {/* String()과 Object.entries()를 사용해 객체를 문자열로 변환해 출력 */}
        <div>객체값: {String(Object.entries(objValue))}</div>
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  // 객체 프로퍼티, PropsTypes의 shape 사용해 정의
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  // 필수 프로퍼티
  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;
