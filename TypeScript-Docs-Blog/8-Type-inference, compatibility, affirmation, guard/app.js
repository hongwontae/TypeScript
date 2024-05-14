"use strict";
// 타입 추론
const a1 = 'AAA';
console.log(a1.length);
function add1(a, b) {
    return a + b;
} // return 타입 추론 기능 활성화
console.log(add1(20, 50));
;
let hero;
let tmp = { name: 'hwt', age: 3000 };
hero = tmp;
console.log(hero);
