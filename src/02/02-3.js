var array1 = ["one", "two"];
var array2 = ["three", "four"];
const combined = [...array1, ...array2];
const [first, second, three = "empty", ...others] = array1;
function func(...args) {
  // 배열을 인자로 사용하는 예제
  var [first, ...others] = args;
}
