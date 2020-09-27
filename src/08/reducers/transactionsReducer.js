import {
  SET_TRANSACTION_LIST,
  LOADING_TRANSACTION_LIST,
  SET_ERROR,
} from "../actions/transactionActions";
import { handle } from "redux-pack";
import {
  CREATE_TRANSACTION,
  UPDATE_TRANSACTION,
  FETCH_TRANSACTION,
  FETCH_TRANSACTION_LIST,
} from "../actions/transactionPackActions";
//리덕스 팩 사용

const initState = {
  //거래목록정보를 그래프 db구조로 저장
  ids: [],
  entities: {},
  //loadig: false,
  //state 초깃값에 loading 추가

  //hasError: false,
  //hasError값 추가

  //로딩상태
  loadingState: {
    [CREATE_TRANSACTION]: false,
    //거래 생성
    [UPDATE_TRANSACTION]: false,
    [FETCH_TRANSACTION]: false,
    [FETCH_TRANSACTION_LIST]: false,
    //목록 요청
  },
  //에러 상태
  errorState: {
    [CREATE_TRANSACTION]: false,
    [UPDATE_TRANSACTION]: false,
    [FETCH_TRANSACTION]: false,
    [FETCH_TRANSACTION_LIST]: false,
  },
  //요청한 페이지 번호, 페이지 크기 정보
  pagination: {},
};

export default (state = initState, action) => {
  //메타에 추가된 페이지 정보
  const { type, payload, meta } = action;
  switch (type) {
    case SET_ERROR: {
      //error 액션 대응
      const { errorMessage } = payload;
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage,
      };
    }
    case LOADING_TRANSACTION_LIST: {
      return {
        ...state,
        loading: true,
        //LOADING_TRANSACTION_LIST액션오면 loading true됨
        hasError: false,
        //hasError false 로 수정함
      };
    }
    case SET_TRANSACTION_LIST: {
      const ids = payload.map((entity) => entity["id"]);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity["id"]]: entity,
        }),
        {}
      );
      return {
        ...state,
        ids,
        entities,
        loading: false,
        //기존 SET_TRANSACTION_LIST액션이 들어오면 loading false 됨
        hasError: false,
        //hasError false 로 수정함
      };
    }
    case CREATE_TRANSACTION:
    case UPDATE_TRANSACTION:
    case FETCH_TRANSACTION:
    case FETCH_TRANSACTION_LIST: {
      return handle(state, action, {
        //비동기 작업에 맞게 스토어 데이터 transaction 반환
        // case LOADING_TRANSACTION_LIST 와 동일
        start: (prevState) => ({
          ...prevState,
          loadingState: {
            ...prevState.loadingState,
            [type]: true,
          },
          errorState: {
            ...prevState.errorState,
            [type]: false,
          },
        }),
        // case SET_TRANSACTION_LIST 과 동일
        success: (prevState) => {
          const { data } = payload;
          const loadingAndErrorState = {
            //초깃값 정의
            loadingState: {
              ...prevState.loadingState,
              [type]: false,
            },
            errorState: {
              ...prevState.errorState,
              [type]: false,
            },
          };
          if (type === FETCH_TRANSACTION_LIST) {
            const { pageNumber, pageSize } = meta || {};
            const ids = data.map((entity) => entity["id"]);
            const entities = data.reduce(
              (finalEntities, entity) => ({
                ...finalEntities,
                [entity["id"]]: entity,
              }),
              {}
            );
            return {
              ...prevState,
              ...loadingAndErrorState,
              ids,
              entities: { ...prevState.entities, ...entities },
              pagination: {
                number: pageNumber,
                size: pageSize,
              },
            };
          } else {
            const id = data["id"];
            //response 데이터 중 id 값 추출
            return {
              ...prevState,
              ...loadingAndErrorState,
              id,
              entities: { ...prevState.entities, [id]: data },
              //그래프 db의 entities 객체에 추가된 자료 id 키값에 할당
            };
          }
        },
        // case SET_ERROR 와 동일
        failure: (prevState) => {
          const { errorMessage } = payload.response.data;
          return {
            ...prevState,
            loadingState: {
              ...prevState.loadingState,
              [type]: false,
              //액션타입에 따라 loadingState값 분리저장
            },
            errorState: {
              ...prevState.errorState,
              [type]: errorMessage || true,
              //오류 메시지 포함 안하면 true해서 오류 발생 표시함
            },
          };
        },
      });
    }
    default:
      return state;
  }
};
