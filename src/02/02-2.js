var string1 = "안녕하세요";
var string2 = "반갑습니다.";
var greeting = `${string1} ${string2}`;
var product = { name: "도서", price: "4200" };
var message = `제품 ${product.name}의 가격은 ${product.price}입니다.`;
var multiLine = `문자열1
문자열2`;
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
var operator2 = `${boolValue ? "참" : "거짓"}입니다.`;
console.log(operator2);
// 템플릿문자열은 백틱(`)으로 문자열 표현

//3분코딩
var cart = { name: "도서", price: 1500 };
var getTotal = function (cart) {
  return `${cart.price}원`;
};
var myCart = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal(
  cart
)}입니다.`;
//답
console.log(myCart);
