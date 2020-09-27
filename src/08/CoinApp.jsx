import React, { PureComponent } from "react";
import { Provider } from "react-redux";
//리덕스 추가
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//리액트 라우터 구성함

import AppLayout from "./components/AppLayout";
import MainPage from "./components/main/MainPage";
//MainPage 컴포넌트 배치
import NotFound from "./components/NotFound";
// import CoinOverview from './components/main/CoinOverview';
//coinoverview 컴포넌트
// import TransactionListContainer from './containers/main/TransactionListContainer';
import configureStore from "./store/configureStore";
//리덕스 스토어 추가
import ModalProvider from "./ModalProvider";
//모달 공급자 추가
// import NotificationContainer from './containers/main/NotificationContainer';
//에러메시지 NotificationContainer로 확인가능
import NotificationContainer from "./containers/NotificationContainer";
//데이터 컴포넌트에 맞게 수정한 내용 들어감
// import RegisterPageContainer from './containers/signup/RegisterPageContainer';
import RouterStateContainer from "./containers/RouterStateContainer";
// import MainPage from '../13/AsyncMainPage';

class CoinApp extends PureComponent {
  store = configureStore();
  //스토어 추가

  render() {
    //exact 주소가 path와 일치
    //Mainpage 출력
    //문자이면 NotFound 출력
    //RouterStateContainer 라우터 공급자의 소비자 컴포넌트
    return (
      <Provider store={this.store}>
        <Router>
          <RouterStateContainer />
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />

                <Route path="*" component={NotFound} />
              </Switch>
              <NotificationContainer />
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
