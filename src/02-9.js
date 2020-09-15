// es6 forEach() 반복문의 순번과 배열의 크기를 따로 변수에 저장하지 않아도 됨
// 가변 변수 let 사용할 때
// function parse(qs){
//     const queryString = qs.substr(1) // queryString = 'banana=10&apple=20&orange=30'
//     const chunks = queryString.split('&'); // chunks = ['banana=10', 'apple=20', 'orange=30']
//     let result = {};
//     chunks.forEach((chunk) => {
//         const [ key, value ] = chunk.split('='); // key = 'banana', value = '10'
//         //const parts = chunk.split('='); // chunk = 'banana=10', parts = ['banana', '10']
//         // const key = parts[0]; // key = 'banana'
//         // const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
//         result[key] = value; // result = { banana : 10}
//     });
//     return result;
// }

// es6 map
// 불변 변수 const 사용할 때
// function parse(qs) {
//     const queryString = qs.substr(1);
//     const chunks = qs.split('&');
//     const result = chunks.map((chunk) => {
//         const [key, value] = chunk.split('=');
//         return { key: key, value: value};
//     });
//     return result;
// }

// es6 reduce() 배열을 객체로 변환함
function sum(numbers) {
  // 첫번째 인자에는 변환함수, 두번째 인자에는 초깃값 전달.
  // reduce()의 첫번째 인자(total)를 이전 결괏값, 두번째 인자(num)를 배열의 각 요솟값으로 생각해 순환 할당하면서 함수 실행
  // 초깃값 0은 이전 결괏값인 total에 할당됨
  return numbers.reduce((total, num) => total + num, 0);
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55

// reduce() 보통 배열을 특정 자료형으로 변환하는 데 사용
function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split("&");
  return (
    chunks
      .map((chunk) => {
        const [key, value] = chunk.split("="); // key = 'banana', value = '10'
        return { key, value }; // {key='banana', value='10'}
      })
      // 첫번째 인자에는 변환함수, 두번째 인자에는 초깃값 {}(result)
      .reduce((result, item) => {
        // item = {key='banana', value='10'}
        result[item.key] = item.value;
        return result;
      }, {})
  );
}
