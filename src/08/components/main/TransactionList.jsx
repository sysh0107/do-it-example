import React, { PureComponent } from "react";
/*
9-1, 9-2 참조 코드
import axios from 'axios';
//기본주소 없이 가상 데이터 서버에 여러 작업 요청
*/
/*
9-3 참조 코드
import Api from '../../Api';
*/
import Heading from "../../../doit-ui/Heading";
import Card from "../../../doit-ui/Card";

/*
8장 참조 코드
import TransactionSearchFilter from './TransactionSearchFilter';
*/
import TransactionSearchFilterContainer from "../../containers/main/TransactionSearchFilterContainer";
//TransactionSearchFilterContainer 출력하도록 수정함
import TransactionTable from "./TransactionTable";
import TransactionPaginationContainer from "../../containers/main/TransactionPaginationContainer";

class TransactionList extends PureComponent {
  /* 8, 9장 참조 코드
  state = {
    transactions: [//임의의 트랜잭션 배열정의해서 프로퍼티로 전달
      {
        id: 'btx_01',
        name: '비트코인(BTX)',
        totalPrice: '123,123,000,000원',
        currentPrice: '4,200,000원',
        datetime: '2019/01/20 08:23:22',
      }
    ],
  }
  */

  //axios.get()으로 데이터를 요청, state를 업데이트함
  componentDidMount() {
    //거래목록요청 액션 삭제로 중복호출 문제점 해결
    /*
    9-2 참조 코드
    axios.get('http://localhost:4000/transactions')
      .then(response => this.setState({ transactions: response.data }));
    */
    /*
    //코드의 값이 BTX인 데이터만 추출해서 보내줌, 인자로 config값 전달함
    9-2 참조 코드
    axios.get('http://localhost:4000/transactions', { params: { code: 'BTX' } })
      .then(response => this.setState({ transactions: response.data }));
    */
    /*
    9-3 참조 코드
    //가상데이터 서버에 데이터를 요청, 스토어의 데이터 변경
    Api.get('/transactions')
      .then(({ data }) => this.props.setTransactionList(data));
    */
    /*
    10-2 참조 코드
    this.props.requestTransactionList();
    //Api함수 뺴고 requestTransactionList부름
    */
  }

  render() {
    /* 8, 9장 참조 코드
    const { transactions } = this.state;
    */
    const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable
            transactions={transactions}
            //loding을 isloading 프로퍼티에 전달
            isLoading={loading}
          />
        </Card>
        <TransactionPaginationContainer />
      </div>
    );
  } //데이터 테이블 컴포넌트에서 출력
  //페이지 이동 버튼 검색목록결과 화면 추가
}

TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: () => {},
};

export default TransactionList;
