import { connect } from "react-redux";
import TransactionSearchFilter from "../../components/main/TransactionSearchFilter";
// import { requestTransactionList } from '../../actions/transactionActions';
//액션함수 교체
import { requestTransactionList } from "../../actions/transactionPackActions";
//transactionActions 에서 transactionPackActions으로 팩 적용하기
import { setFilter } from "../../actions/searchFilterActions";

const mapStateToProps = (state) => ({
  initValues: state.searchFilter.params,
});

//액션만 전달, null 전달
//export default connect(null), { setTransactionList })(TransactionSearchFilter);
export default connect(mapStateToProps, { setFilter })(TransactionSearchFilter);
//setFilter 액션 연결
//mapStateToProps 검색입력항목스토어 데이터 추가
