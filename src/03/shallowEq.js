import shallowEqual from "shallow-equal";

const obj = { name: "park" };
const mylist = [1, 2, 3, obj];
const list1 = [1, 2, 3, obj];
const list2 = [1, 2, 3, { name: "park" }];

console.log(mylist === list1); // false : 같은 객체 아님
console.log(shallowEqual(mylist, list1)); // true : 배열 요소 비교
console.log(shallowEqual(list1, list2)); // false : list2의 마지막 요소는 새 객체이므로
// 내용물을 모두 비교하지 않는 이유는 비교 검사 작업이 성능에 영향을 끼치기 때문
