// 2초(2000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout(() => console.log('Hi!'), 2000);

// 3초(3000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
//이때 콜백함수에 'Jo'가 인수로 전달된다.
setTimeout(name => console.log(`Hi! ${name}`), 3000, 'Jo');

// 두번째 인수(delay)를 생략하면 기본값 0이 지정된다.
setTimeout(() => console.log('Hello!'));