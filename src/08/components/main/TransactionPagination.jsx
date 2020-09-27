import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "../../../doit-ui/Button";
import InlineList from "../../../doit-ui/InlineList";

//페이지 이동 버튼 출력
class TransactionPagination extends PureComponent {
  constructor(props) {
    super(props);
    this.handleNextPress = this.handleNextPress.bind(this);
    this.handlePrevPress = this.handlePrevPress.bind(this);
  }
  handleNextPress() {
    //다음번호 페이지 목록 요청
    //searchParams 인자로 전달
    const { requestTransactionList, searchParams, pageNumber } = this.props;
    requestTransactionList(searchParams, pageNumber + 1);
  }
  handlePrevPress() {
    //이전번호 페이지 목록 요청
    //searchParams 인자로 전달
    const { requestTransactionList, searchParams, pageNumber } = this.props;
    requestTransactionList(searchParams, pageNumber - 1);
  }
  render() {
    const { loading, pageNumber, hasNext } = this.props;
    const prevDisabled = loading || pageNumber <= 1;
    //로딩 or 1페이지이면 앞으로 못감
    const nextDisabled = loading || !hasNext;
    //로딩 or 마지막페이지이면 뒤로 못감
    return (
      <InlineList align="right">
        <Button
          secondary
          disabled={prevDisabled}
          onPress={this.handlePrevPress}
        >
          이전
        </Button>
        <Button primary disabled={nextDisabled} onPress={this.handleNextPress}>
          다음
        </Button>
      </InlineList>
    );
  }
}

TransactionPagination.propTypes = {
  hasNext: PropTypes.bool,
  pageNumber: PropTypes.number,
  loading: PropTypes.bool,
  requestTransactionList: PropTypes.func.isRequired,
};

export default TransactionPagination;
