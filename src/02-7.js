var x = 0;
var y = 0;
// 객체의 변수를 선언할 때 키 값 생략시, 자동으로 키의 이름으로 키값을 지정
var obj = { x, y };
var randomKeyString = "other";
var combined = {
  //객체 생성 블록 안에 대괄호를 사용하여 표현식을 작성하면 추가하여 계산된 키 값 생성
  ["one" + randomKeyString]: "some value",
};
var obj2 = {
  x,
  // function 키워드 생략 가능
  methodA() {
    console.log("method A");
  },
  methodB() {
    return 0;
  },
};
