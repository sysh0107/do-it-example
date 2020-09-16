import React, { Component } from "react";
import PropTypes from "prop-types";

class ChildProperty extends Component {
  render() {
    // {this.props.children}과 같은 방법으로 <div><span>자식 노드</span></div>를 받을 수 있음
    return <div>{this.props.children}</div>;
  }
}
ChildProperty.propTypes = {
  children: PropTypes.node,
};

export default ChildProperty;
