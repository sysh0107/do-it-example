import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Text from "../../../doit-ui/Text";
import Spacing from "../../../doit-ui/Spacing";
import Input from "../../../doit-ui/Input";
import Button from "../../../doit-ui/Button";
import InlineList from "../../../doit-ui/InlineList";
import Form from "../../../doit-ui/Form";
import { Consumer as Modal } from "../../../doit-ui/Modal/context";
//import Api from "../../Api";
//createTransaction 액션함수 호출로 바뀜

class TradeCoinPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values, closeModal) {
    const { name, code, createTransaction } = this.props;
    const formValues = {
      ...values,
      code,
      name,
    };
    //Api.post("/transactions", formValues).then(() => closeModal());
    //post로 transaction 생성, 거래요청 마치고 모달 닫기
    createTransaction(formValues, closeModal);
  }
  render() {
    const { name, price, type, loading } = this.props;
    //생성처리과정 중 버튼 비활성화 함
    //버튼 두 번 안눌림
    const typeName = type === "sell" ? "판매" : "구매";
    return (
      <Modal>
        {({ closeModal }) => (
          <Form
            onSubmit={(values) => this.handleSubmit(values, closeModal)}
            initValues={{ currentPrice: price }}
          >
            <Form.Consumer>
              {({ onChange, values }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    {name} {typeName}
                  </Text>
                  <Spacing bottom={2}>
                    <Input
                      name="currentPrice"
                      label="금액"
                      value={values["currentPrice"]}
                      onChange={onChange}
                    />
                  </Spacing>
                  <Spacing bottom={2}>
                    <Input
                      name="amount"
                      label="수량"
                      value={values["amount"]}
                      onChange={onChange}
                    />
                  </Spacing>
                  <InlineList spacingBetween={1}>
                    <Button primary disabled={loading}>
                      {loading ? "거래 처리중" : typeName}
                    </Button>
                    <Button onPress={closeModal} disabled={loading}>
                      취소
                    </Button>
                  </InlineList>
                </Spacing>
              )}
            </Form.Consumer>
          </Form>
        )}
      </Modal>
    );
  }
}

TradeCoinPage.propTypes = {
  createTransaction: PropTypes.func,
};

export default TradeCoinPage;
