//XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

//HTTP 요청 초기화
xhr.open('POST', '/users');

//HTTP 요청 헤더 설정
//클라이언트가 서버로 전송할 데이터의 MIME 타입지정: json
xhr.setRequestHeader('content-type', 'application/json');

//HTTP 요청 전송
xhr.send(JSON.stringify({id: 1, content: 'HTML', completed: false}));
//HTTP 요청 메서드가 GET인 경우 send 메서드에 페이로드로 전달한 인수는 무시되고 요청 몸체는 null로 설정된다.