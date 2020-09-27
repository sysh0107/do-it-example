//스토어 설정 파일
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//리덕스 크롬 확장도구가 미들웨어 감시기능 이용
import reducers from "../reducers";
import { SET_TRANSACTION_LIST } from "../actions/transactionActions";
//액션 타입이 SET_TRANSACTION_LIST 사용
import thunk from "redux-thunk";
//리덕스 thunk 사용
import { middleware as reduxPackMiddleware } from "redux-pack";
//미들웨어가 알람처리함 기능 추가
import searchFilterEffects from "../middlewares/searchFilterEffects";
import routerEffects from "../middlewares/routerEffects";
//미들웨어 구성 함수에 추가
import notificationEffects from "../middlewares/notificationEffects";

//????? transactionEffects from "../middlewares/transactionEffects"; 이 임포트가 안된다
//이유를 모르겠지만 못 쓰는 것 같다 export 전에 해줬는데 왜 반영이 안될까 넘어가자
//저자가 왜 안 써놨지?? 저자 깃에 이슈 등록했다

const customMiddleware = (store) => (nextRunner) => (action) => {
  console.log("미들웨어에 전달된 액션 객체", action); //nextRunner이전실행 1
  console.log("리듀서 실행이전", store.getState()); //nextRunner이전실행 2
  const result = nextRunner(action);
  console.log("리듀서 실행이후", store.getState());
  return result;
  //1의 123, 2의 123, 리듀서실행, 2의 45, 1의 45 순서로 실행됨
};

const customMiddleware2 = (store) => (nextRunner) => (action) => {
  console.log("미들웨어2 전달된 액션 객체", action);
  console.log("미들웨어2 실행이전", store.getState());
  const result = nextRunner(action);
  console.log("미들웨어2 실행이후", store.getState());
  return result;
};
const customMiddleware3 = (store) => (nextRunner) => (action) => {
  console.log("미들웨어3 전달된 액션 객체", action);
  console.log("미들웨어3 실행이전", store.getState());
  const result = nextRunner(action);
  console.log("미들웨어3 실행이후", store.getState());
  return result;
};

const customMiddleware1 = () => (nextRunner) => (action) => {
  if (action.type === SET_TRANSACTION_LIST) {
    //페이로드 값 변경 미들웨어
    return nextRunner({
      ...action,
      payload: [
        {
          id: 0,
          code: "DOIT",
          name: "두잇코인(DOIT)",
          totalPrice: 1000000000,
          currentPrice: 25000,
          datetime: "현재시간",
        },
      ],
    });
  }
  return nextRunner(action);
};

//리덕스 크롬확장도구 조합, 인자로 전달된 미들웨어를 리덕스 확장 도구 미들웨어와 묶음
// export default initStates => createStore(
//   combineReducers(reducers),
//   initStates,
//   applyMiddleware(customMiddleware1),
// );

export default (initStates) =>
  createStore(
    combineReducers(reducers),
    initStates,
    //composeWithDevTools로 리덕스에 미들웨어 적용
    composeWithDevTools(
      // applyMiddleware(searchFilterEffects),
      applyMiddleware(
        thunk,
        //redux-thunk 리덕스에 적용
        reduxPackMiddleware,
        //리덕스 팩 인자 추가
        searchFilterEffects,
        //미들웨어 검색필터 변경 추가
        //검색버튼 누를 때마다 FETCH_LIST 두 번 발생
        notificationEffects,
        //미들웨어에서 알림액션실행
        routerEffects
        //미들웨어 구성 함수에 추가

        //transactionEffects
        //이것도 추가가 되야하는데 안된다 이유 모른다
      )
      // applyMiddleware(notificationEffects),
      // applyMiddleware(customMiddleware, customMiddleware2),
      //스토어에 미들웨어를 등록할 수 있도록 함
      // applyMiddleware(customMiddleware3),
    )
  );
