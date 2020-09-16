import React from "react";
import PropsComponent from "./03/PropsComponent";
import TodaysPlan from "./03/TodaysPlan";
import ChildComponent from "./03/ChildComponent";
import BooleanComponent from "./03/BooleanComponent";
import ChildComponent2 from "./03/ChildComponent2";
import DefaultPropsComponent from "./03/DefaultPropsComponent";
import ChildProperty from "./03/ChildProperty";

// js, jsx 확장자 생략해도 웹팩 코드검색 확장자 기능함
class App extends React.Component {
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
      <div>
        <ChildProperty>
          <div>
            <span>자식 노드</span>
          </div>
        </ChildProperty>
      </div>
    );
  }
}

export default App;
