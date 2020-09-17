import React, { Component, PureComponent } from "react";
import PropsComponent from "./03/PropsComponent";
import TodaysPlan from "./03/TodaysPlan";
import ChildComponent from "./03/ChildComponent";
import BooleanComponent from "./03/BooleanComponent";
import ChildComponent2 from "./03/ChildComponent2";
import DefaultPropsComponent from "./03/DefaultPropsComponent";
import ChildProperty from "./03/ChildProperty";
import StateExample from "./03/StateExample";
import ForceUpdateExample from "./03/ForceUpdateExample";
import Counter from "./03/Counter";
import NewCounter from "./03/NewCounter";
import ListExample from "./03/ListExample";

// js, jsx 확장자 생략해도 웹팩 코드검색 확장자 기능함

// 3-6 purecomponent 3분 코딩
// class MyComponent extends React.Component {
//   componentDidUpdate() {
//     console.log("MyComponent 새로 고침");
//   }
// }
// class MyPureComponent extends React.PureComponent {
//   componentDidUpdate() {
//     console.log("MyPureComponent 새로 고침");
//   }
// }
class App extends React.Component {
  // 3-6 purecomponent
  // constructor(props) {
  //   super(props);
  //   this.listValue = [{ name: "Park" }, { name: "Lee" }];
  //   this.state = { version: 0 };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick() {
  //   setTimeout(() => {
  //     this.listValue[0].name = "Justin";
  //     this.setState({ version: 1 });
  //   }, 100);
  //   setTimeout(() => {
  //     this.listValue = [{ name: "Justine" }, { name: "Lee" }];
  //     this.setState({ version: 2 });
  //   }, 200);
  // }
  // 3-5 생명 주기
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 10 };
  //   this.resetCount = this.resetCount.bind(this);
  // }
  // resetCount() {
  //   this.setState(({ count }) => ({ count: count + 10 }));
  // }
  render() {
    // const array = [1, 2, 3];
    // const obj = { name: "제목", age: 30 };
    // const node = <h1>노드</h1>;
    // const func = () => {
    //   console.log("메시지");
    // };
    return (
      // <ChildComponent
      //   boolValue={true}
      //   numValue={1}
      //   arrayValue={array}
      //   objValue={obj}
      //   nodeValue={node}
      //   funcValue={func}
      // 변수에 객체를 담아 전달하는 방법이 실수를 줄일 수 있음
      // arrayValue={[1, 2, 3]}
      // objValue={{ name: "제목", age: 30 }}
      // nodeValue={<h1>노드</h1>}
      // funcValue={() => {
      //   console.log("메시지");
      // }}

      // <div>
      //   <div>
      //     <b>지루할 때:</b>
      //     <BooleanComponent bored />
      //     {/* 이름만 선언하면 true 전달 */}
      //   </div>
      //   <div>
      //     <b>즐거울 때:</b>
      //     <BooleanComponent />
      //     {/* undefined와 false는 조건문에서 같은 취급 */}
      //   </div>
      // </div>

      // <ChildComponent2 objValue={{ age: 20 }} requiredStringValue="문자" />

      // 기본 프로퍼티
      // <div>
      //   <DefaultPropsComponent />
      // </div>
      // 자식 프로퍼티
      // <div>
      //   <ChildProperty>
      //     <div>
      //       {/* <span>자식 노드</span> */}
      //       <button>버튼</button>
      //     </div>
      //   </ChildProperty>
      // </div>

      // state 상태 관리
      // <div>
      //   <StateExample />
      // </div>

      // 사용 자제-성능) 클래스 인스턴스 변수와 forceUpdate()로 state 관리
      // <div>
      //   <ForceUpdateExample />
      // </div>
      // 3분 코딩
      // <div>
      //   <Counter />
      // </div>

      // 3-5 생명주기
      // <div>
      //   <div>
      //     {/* counter는 처음 생성될 때만 프로퍼티값으로 state를 설정하므로 갱신과정에서 state 변경 x */}
      //     <Counter count={this.state.count} />
      //   </div>
      //   <div>
      //     <NewCounter count={this.state.count} />
      //   </div>
      //   <button onClick={this.resetCount}>
      //     {this.state.count + 10}으로 초기화
      //   </button>
      // </div>
      // 3-6 purecomponent 3분코딩
      // <div className="body">
      //   <MyComponent value={this.listValue} />
      //   <MyPureComponent value={this.listValue} />
      //   <button onClick={this.handleClick}>버튼</button>
      // </div>
      <div>
        <ListExample />
      </div>
    );
  }
}

export default App;
