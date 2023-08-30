class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    //getter함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    //setter함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const me = new Person('Ungmo', 'Lee');

//데이터 프로퍼티를 통한 프로퍼티 값 참조.
console.log(`${me.firstName} ${me.lastName}`); // Ungmo Lee

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
//setter 함수가 호출된다.
me.fullName = 'Hyeongmin Jo';
console.log(me); //{firstName: 'Hyeongmin', lastName: 'Jo'}

//접근자 프로퍼티를 통한 프로퍼티 값의 참조
console.log(me.fullName); // Hyeongmin Jo

// fullName은 접근자 프로퍼티다
//접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));