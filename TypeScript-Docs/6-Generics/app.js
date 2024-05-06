"use strict";
function add(a) {
    return a;
}
;
let savage = add(10);
console.log(savage);
// 함수 표현식 + 제네릭
let a3 = function (a) {
    return a;
};
// 함수 표현식 + 호출 시그니처 + 제네릭
let a4 = function (a) {
    return a;
};
;
let a5 = function (a) {
    return a;
};
// 클래스 + 제네릭
class Person2 {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    ;
    call() {
        console.log(`My Name is ${this.name} and my age ${this.age}`);
    }
    ;
}
;
const person = new Person2('String', 3000);
person.call();
;
function checkLengthProperty(a) {
    console.log(a.length);
    return a;
}
;
const startingMember = checkLengthProperty({ length: 10 });
console.log(startingMember);
// 제약사항 + keyof
let n1 = {
    ak: 'Ak47',
    poison: 'retire',
    ksep: 'backSen ffnam'
};
function checkObjKey(a, b) {
    console.log(a[b]);
}
checkObjKey(n1, 'ak');
// 제약사항 + new
function checkB(a) {
    return new a();
}
