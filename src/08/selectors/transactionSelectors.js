// import { createSelector } from 'reselect';
import createSelectors from "../../11/api-redux-pack/createSelectors";

//리덕스팩 모듈화 작업함
//셀렉터로 mapStateToProps 반복 수정 줄임
//566p 셀렉터에 리셀렉트 반영하기 이해 안됨
export const {
  resourceSelector: transactionsSelector,
  entitiesSelector: transactionEntitiesSelector,
  pagesSelector: transactionPagesSelector,
  collectionSelector: transactionListSelector,
  collectionLoadingStateSelector: transactionListLoadingStateSelector,
  createLoadingStateSelector: transactionCreateLoadingStateSelector,
  paginationSelector,
} = createSelectors("transactions");

//기존 셀렉터 함수 다 지움
// import {
//   FETCH_TRANSACTION_LIST,
//   CREATE_TRANSACTION
// } from '../actions/transactionPackActions';

// export const transactionsSelector = state => state.transactions;
// export const transactionEntitiesSelector = state =>
//   transactionsSelector(state).entities;
// export const transactionPagesSelector = state =>
//   transactionsSelector(state).pages;
// export const transactionListSelector = createSelector(
//   [transactionsSelector],
//   transactions => {
//     const { entities, ids } = transactions;
//     return ids.map(id => entities[id]);
//   }
// );

// export const loadingStateSelector = state =>
//   transactionsSelector(state).loadingState;
// export const errorStateSelector = state =>
//   transactionsSelector(state).errorState;

// export const transactionListLoadingStateSelector = state =>
//   loadingStateSelector(state)[FETCH_TRANSACTION_LIST];
// export const transactionCreateLoadingStateSelector = state =>
//   loadingStateSelector(state)[CREATE_TRANSACTION];

// export const paginationSelector = createSelector(
//   transactionsSelector,
//   transactions => {
//     const { pagination } = transactions;

//     return {
//       number: pagination.number || 0,
//       size: pagination.size
//     };
//   }
// );
// export const firstPageLoadingSelector = createSelector(
//   transactionListLoadingStateSelector,
//   paginationSelector,
//   (loading, { number }) => loading && number === 0,
// );
