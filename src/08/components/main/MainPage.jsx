import React, { PureComponent } from "react";
import CoinOverview from "./CoinOverview";
// import TransactionList from './TransactionList';
import TransactionListContainer from "../../containers/main/TransactionListContainer";

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverview />
        <TransactionListContainer />
      </React.Fragment>
    ); //CoinOver, Transaction을 React.Fragment로 묶음
  }
}

export default MainPage;
//MainPagedp 에 컴포넌트 포함
//BrowserRouter에 주소에 맞게 컴포넌트 출력
