import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import InlineList from "../../../doit-ui/InlineList";
import Button from "../../../doit-ui/Button";
import Text from "../../../doit-ui/Text";
import Input from "../../../doit-ui/Input";
import Form from "../../../doit-ui/Form";
import Select, { Option } from "../../../doit-ui/Select";

// import Api from '../../Api';

class TransactionSearchFilter extends PureComponent {
  //onSubmit 이벤트 발생 -> this.handleSubmit() 호출, setTransactionList() 호출
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(params) {
    //빈 값이 쿼리스트링으로 전달되지 않게 함

    //setFilter 액션함수 추가
    // const { requestTransactionList, setFilter } = this.props;
    const { setFilter, history } = this.props;
    const cleanedParams = Object.entries(params)
      .filter((entries) => entries[1] !== "")
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    // requestTransactionList(cleanedParams);
    // setFilter(cleanedParams);
    //setFilter 액션함수 추가
    const querystring = Object.entries(params)
      .filter((entries) => !!entries[1])
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    history.push(`/?${querystring}`);

    // Api.get('/transactions', { params })
    //   .then(({ data }) => setTransactionList(data));
    //액션함수가 비동기 처리
  }
  render() {
    //Form 컴포넌트 initValues 프로퍼티에서 전달받은 값으로 설정
    const { initValues } = this.props;
    //onSubmit프로퍼티로 전달받은 콜백함수는 handleSubmit 콜백함수
    //바로 대입 가능
    return (
      <Form onSubmit={this.handleSubmit} initValues={initValues}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                검색
              </Text>
              <Select
                name="code"
                label="코인 코드"
                onChange={onChange}
                value={values["code"]}
              >
                <Option label="선택해주세요" value="" />
                <Option label="비트코인(BTX)" value="BTX" />
                <Option label="이더리움(ETH)" value="ETH" />
                <Option label="두잇코인(DOIT)" value="DOIT" />
              </Select>
              <Input
                name="currentPrice_gte"
                label="최소 거래가"
                onChange={onChange}
                value={values["currentPrice_gte"]}
              />
              <Input
                name="currentPrice_lte"
                label="최대 거래가"
                onChange={onChange}
                value={values["currentPrice_lte"]}
              />
              <Button type="submit" primary>
                검색
              </Button>
            </InlineList>
          )}
        </Form.Consumer>
      </Form>
    );
    //InlineList 가로로 배치, FormProvider 사용자 입력
    //gte 최소, lte 최대 가상데이터서버에 데이터 요청하면 맞는 데이터 보내줌
  }
}

TransactionSearchFilter.propTypes = { setFilter: PropTypes.func };
//액션함수가 비동기 처리
//setFilter 액션함수 추가

export default withRouter(TransactionSearchFilter);
//라우터 액션 추가
