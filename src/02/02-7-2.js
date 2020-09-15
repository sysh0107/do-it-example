// es6 구조 분해 문법
var list = [0, 1];
var [item1, item2, item3 = -1] = list;
// 두 값 치환
[item2, item1] = [item1, item2];
var obj = {
  key1: "one",
  key2: "two",
};
var {
  // 키 값 변경
  key1: newKey1,
  // 객체의 키 값을 변수에 할당
  key2,
  key3 = "default key3 value",
} = obj;

var [item1, ...otherItems] = [0, 1, 2];
var { key1, ...others } = { key1: "one", key2: "two" };
// otherItems=[1,2]
// others = {key2: 'two'}
