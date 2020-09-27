import { connect } from "react-redux";
import TransactionPagination from "../../components/main/TransactionPagination";
import {
  requestTransactionList,
  FETCH_TRANSACTION,
} from "../../actions/transactionPackActions";
import {
  paginationSelector,
  transactionListLoadingStateSelector,
} from "../../selectors/transactionSelectors";

const mapStateToProps = (state) => {
  //558페이지 설명과 코드 불일치
  //책 설명에서는 loding -> loadingState로 바꾸라 함
  // const{pagination, lodingState} = state.transactions;
  // //const loading = loadingState[FETCH_TRANSACTION];
  //셀렉터 사용으로 윗 줄 내용 빠짐

  // const {number} = pagination;
  // return { pageNumber: number || 1, loading : loadingStateSelector(state)};
  //셀렉터 사용함

  const { pagination, loading, ids } = state.transactions;
  const { number, size } = pagination;

  return {
    //검색입력스토어 데이터 연결
    searchParams: state.searchFilter.params,
    hasNext: ids.length === size,
    //결과 목록의 개수가 페이지 크기와 같을 때 다음 페이지 존재한다고 가정
    loading: transactionListLoadingStateSelector(state),
    pageNumber: paginationSelector(state).number || 1,
    //페이지 정보 데이터 컴포넌트 추가
  };
};
const mapDispatchToProps = {
  requestTransactionList,
  //목록요청액션 데이터 컴포넌트 추가
};

//액션과 스토어 데이터 연결
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionPagination);
