const obj = {
    name: 'Jo',
    age: 29,
    alive: true,
    hobby: ['traveling', 'computerGame']
};

//객체를 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);

//JSON 포맷의 문자열을 객체로 변환한다.
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
/*
object {
  name: 'Jo',
  age: 29,
  alive: true,
  hobby: [ 'traveling', 'computerGame' ]
}
*/