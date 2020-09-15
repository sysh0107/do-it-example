function throttle(func, delay) {
  // func : 서버 요청, delay : 호출 생략 시간
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.call(context, ...args); // 함수를 즉시 실행
      lastRan = Date.now(); // 실행 시간을 저장
    } else {
      if (lastFunc) clearTimeout(lastFunc); // 이후에 함수 실행 요청이 오면
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= delay) {
          // 지연 시간을 게산하여 값이 delay보다 크면 func() 실행
          func.call(context, ...args);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
}
var checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = window.pageYOffset;
  const pageBottomPosition =
    document.body.offsetHeight - window.innerHeight - offset;
  if (currentScrollPosition >= pageBottomPosition) {
    //fetch('/page/next');
    console.log("다음 페이지 로딩");
  }
};
var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener("scroll", infiniteScroll);
