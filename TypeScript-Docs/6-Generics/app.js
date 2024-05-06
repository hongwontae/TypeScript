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
console.log(a5(50));
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
;
