// 배열이나 객체를 불변 변수로 선언하고 자스 내장 함수로 값 변경
const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0,1] , 배열의 index 0 위치에서 길이 0으로 아무것도 자르지 않고 0 추가
arr2.pop(); // arr2 = [1]
const obj2 = {};
obj2["name"] = "내이름"; // obj2 = { name: '내이름'}
Object.assign(obj2, { name: "내이름" }); // obj2 = { name: '새이름'}
delete obj2.name; // obj2 = {}
// 불변 변수로 정의된 배열이나 객체를 내장 함수로 수정하는 것을 암묵적으로 금지하여 무결성 유지
// 불변 변수의 값을 수정할 때는 새로 정의

const num1 = 1;
const num2 = num1 * 3; // num2 = 3
const str1 = "문자";
const str2 = str1 + "추가";
const arr3 = [];
const arr4 = arr3.concat(1);
const arr5 = [...arr4, 2, 3]; // arr 5 = [1,2,3]
const arr6 = arr5.slice(0, 1); // arr6 = [1], arr5 = [1,2,3], start와 end에는 숫자가 들어갑니다. 배열의 start에 해당하는 요소부터 end 바로 전의 요소까지를 선택하여 새로운 배열을 만듭니다.
// 무결성 내장 함수
// push -> concat
// splice(s, c, ...items) -> slice(0, s), .concat(...items, slice(s+c))
// pop -> slice(0, len-1)
// shift -> slice(1)
