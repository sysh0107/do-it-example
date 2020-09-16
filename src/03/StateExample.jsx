import React, { Component } from "react";

class StateExample extends Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      loading: true,
      formData: "no data",
    };
    // 함수로 넘어갈 this는 반드시 생성자에서 bind함수로 묶어야함, 이후 콜백 함수를 다룰 때 bind(this)에 대해 자세히 이야기하겠습니다.
    this.handleData = this.handleData.bind(this);
    // 4초 후에 handleData 함수를 호출합니다.
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = "new data";
    const { formData } = this.state;
    // this.setState로 state 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });
    // this.state.loading은 현재 true입니다.
    console.log("loading값", this.state.loading);
    // 이후 호출될 render() 함수에서의 this.state.loading은 false입니다.
  }
  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능합니다.*/}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

// state 사용시 주의점
// 1. constructor에서 반드시 초기화 (없으면 빈 객체({})라도 넣기)
// 2. state값을 변경할 때는 setState()를 반드시 사용
//      => state값 직접 변경시 render() 호출x, setState() 호출해 변경시 리액트 엔진이 render() 호출함
// 3. setState()는 비동기로 처리되며, setState() 이후로 연결된 함수의 실행이 완료된 시점에 화면 동기화

export default StateExample;
