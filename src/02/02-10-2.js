// 중요@ 서버에 데이터 요청, axios, ajax 라이브러리 사용
// then()이 Promise 객체를 반환하므로 응용하면 각 지연 작업들을 나누거나 다시 합칠 수 있음
const work1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("작업 1 완료");
    }, 100);
  });
const work2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("작업 2 완료");
    }, 200);
  });
const work3 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("작업 3 완료");
    }, 300);
  });

function urgentWork() {
  console.log("긴급 작업");
}

const nextWorkOnDone = (msg1) => {
  console.log("done after 100ms: " + msg1);
  return work2();
};

work1()
  .then(nextWorkOnDone)
  .then((msg2) => {
    console.log("done after 200ms:" + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log("done after 600ms:" + msg3);
  });
urgentWork();
// 부분 나누기
// work1and2().then()이 work2() 구문을 실행하여 Promise 객체를 반환하므로 이어붙일 수 있음
const work1and2 = () =>
  work1().then((msg1) => {
    console.log("done after 100ms:" + msg1);
    return work2();
  });

work1and2()
  .then((msg2) => {
    console.log("done after 200ms:" + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log("done after 600ms:" + msg3);
  });
