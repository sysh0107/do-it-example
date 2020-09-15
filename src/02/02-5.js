// // es5
// function add(first, second){
//     return first + second;
// }
// // typeof add === 'function'
// var add = function(first, second){
//     return first + second;
// };
// // typeof add === 'function'

// es6
var add = (first, second) => {
  return first + second;
};
// 본문 블록이 비어 있고 결괏값을 바로 반환하는 경우에는 중괄호 생략하고 => 뒤에 반환 표현식 넣을 수 있음
var add = (first, second) => first + second;
// 반환값이 객체라면 괄호로 결괏값을 감싸 간결하게 표현
var addAndMultiple = (first, second) => ({
  add: first + second,
  multiply: first * second,
});

// function -> return -> return : 계단형 함수 선언과 같은 구조가 없게 해줌
var addNumber = (num) => (value) => num + value;
// 화살표 함수는 콜백 함수의 this 범위로 생기는 오류를 피하기 위해 bind(this)를 하는 과정 포함되어 있음
