import { handle } from "redux-pack";
import { CREATE, UPDATE, FETCH, FETCH_LIST, RESET } from "./actionTypes";

//리듀서 모듈화함
//커링패턴 사용해서 인자에 전달된 이름에 맞게 리듀서 함수 반환함
export default (...reducerNames) => {
  return reducerNames.reduce((apiReducers, name) => {
    const initState = {
      ids: [],
      entities: {},
      loadingState: {
        [`${CREATE}/${name}`]: false,
        [`${UPDATE}/${name}`]: false,
        [`${FETCH}/${name}`]: false,
        [`${FETCH_LIST}/${name}`]: false,
      },
      errorState: {
        [`${CREATE}/${name}`]: false,
        [`${UPDATE}/${name}`]: false,
        [`${FETCH}/${name}`]: false,
        [`${FETCH_LIST}/${name}`]: false,
      },
      pagination: {},
      pages: {},
    };
    apiReducers[name] = (state = initState, action) => {
      const { type, payload, meta } = action;
      const { resourceName, key } = meta || {};

      if (resourceName !== name) {
        //이름 일치할 경우에만 리듀서 코드 실행함
        return state;
      }
      switch (type) {
        case CREATE:
        case UPDATE:
        case FETCH:
        case FETCH_LIST: {
          return handle(state, action, {
            start: (prevState) => ({
              ...prevState,
              loadingState: {
                ...prevState.loadingState,
                [`${type}/${name}`]: true,
              },
              errorState: {
                ...prevState.errorState,
                [`${type}/${name}`]: false,
              },
            }),
            success: (prevState) => {
              const { data } = payload;
              if (type === FETCH_LIST) {
                const { pageNumber, pageSize } = meta || {};
                const ids = data.map((entity) => entity["id"]);
                const entities = data.reduce(
                  (finalEntities, entity) => ({
                    ...finalEntities,
                    [entity[key]]: entity,
                  }),
                  {}
                );
                return {
                  ...prevState,
                  ids,
                  entities: { ...prevState.entities, ...entities },
                  loadingState: {
                    ...prevState.loadingState,
                    [`${type}/${name}`]: false,
                  },
                  errorState: {
                    ...prevState.errorState,
                    [`${type}/${name}`]: false,
                  },
                  pagination: {
                    number: pageNumber,
                    size: pageSize,
                  },
                  pages: {
                    ...prevState.pages,
                    [pageNumber]: ids,
                  },
                };
              } else {
                const id = data[key];
                return {
                  ...prevState,
                  id,
                  entities: { ...prevState.entities, [id]: data },
                  loadingState: {
                    ...prevState.loadingState,
                    [`${type}/${name}`]: false,
                  },
                  errorState: {
                    ...prevState.errorState,
                    [`${type}/${name}`]: false,
                  },
                };
              }
            },
            failure: (prevState) => {
              const { errorMessage } = payload.response
                ? payload.response.data
                : {};
              return {
                ...prevState,
                loadingState: {
                  ...prevState.loadingState,
                  [`${type}/${name}`]: false,
                },
                errorState: {
                  ...prevState.errorState,
                  [`${type}/${name}`]: errorMessage || true,
                },
              };
            },
          });
        }
        case RESET:
          return initState;
        default:
          return state;
      }
    };
    return apiReducers;
  }, {});
};
