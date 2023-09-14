setTimeout(() => console.log(1), 0);

Promise.resolve()
    .then(() => console.log(2))
    .then(() => console.log(3));
// 프로미스의 후속처리 메서드의 콜백 함수는 태스크 큐가 아니라 마이크로태스크 큐에 저장된다.
// 마이크로태스크큐는 태스크큐보다 우선순위가 높다.