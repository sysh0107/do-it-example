import { connect } from "react-redux";
import TransactionList from "../../components/main/TransactionList";
// import { setTransactionList } from '../../actions/transactionActions';
// import { requestTransactionList } from '../../actions/transactionActions';
//transactionActions 에서 transactionPackActions으로 팩 적용하기
import { requestTransactionList } from "../../actions/transactionPackActions";
//setTransactionList에서 교체됨
import {
  transactionListSelector,
  transactionListLoadingStateSelector,
} from "../../selectors/transactionSelectors";

//데이터 컴포넌트 관리

// const mapStateToProps = state => {
//loding 지우고 loadingState 로딩 상태값 반환
//   // const { ids, entities, loadingState, pages, pagination } = state.transactions;
//   // const transactions = ids.map(id => entities[id]);
//   const { pagination } = state.transactions;
//   const transactions = transactionListSelector(state);
//   const loading = transactionListLoadingStateSelector(state);
//   const { number = 1 } = pagination;
//   return { transactions, loading: loading && number === 1 };
// };

//셀렉터 적용해 변경 시 셀렉터만 변경하면 됨
const mapStateToProps = (state) => ({
  transactions: transactionListSelector(state),
  loading: transactionListLoadingStateSelector(state),
  //반환 객체에 loading 추가
});

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
