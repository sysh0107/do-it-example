import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles, css, withStylesPropTypes } from "../../doit-ui/withStyles";
import AppNav, { HEIGHT } from "./AppNav";

class AppLayout extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <AppNav />
        <div {...css(styles.body)}>{children}</div>
      </div>
    ); //분문에서 자식프로퍼티 출력, 상단정보, 하단정보화면
  }
}

AppLayout.propTypes = {
  ...withStylesPropTypes,
  children: PropTypes.node,
};

export default withStyles(({ unit }) => ({
  wrapper: {
    marginTop: HEIGHT,
  },
  //AppNav 컴포넌트만큼 margin
  body: {
    padding: unit * 4,
  },
}))(AppLayout);
