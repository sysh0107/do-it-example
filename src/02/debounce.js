// debounce.js를 실행하려면 export를 삭제해야 합니다.
// 실행 후 다시 export를 넣어주세요(이후 실습)
// func : 서버 요청, delay : 지연 시간
export function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      // 지연 실행 대기중인 함수의 작업 취소
      clearTimeout(inDebounce);
    }
    // 지연 대기 시간 내에 입력 신호가 호출될 때 실행 대기 함수를 취소하기 위해 사용
    inDebounce = setTimeout(() => func(...args), delay);
  };
}
const run = debounce((val) => console.log(val), 100);
run("a");
run("b");
// 지연 실행 대기중에 취소되었고 아래에서 다시 실행.
run(2);
// 100ms이후
// 2
