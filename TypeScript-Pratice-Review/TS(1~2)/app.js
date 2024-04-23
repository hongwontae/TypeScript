"use strict";
// union Type
let b1;
b1 = 'AK47';
b1 = 1000;
b1 = true;
// Literal Type
let b2;
b2 = 10;
b2 = 'as-Number';
b2 = 'as-Text';
let b3;
b3 = 'RiverFool';
// b3 = 'kkk'  => Fail 리터럴+유니언에 해당되는 타입이 아니다.
console.log(b3);
// funtion 반환 타입
function adding(n1, n2) {
    return (n1) + n2;
}
;
let b4 = adding('Number is... ', 1000);
console.log(b4);
function vovoid(k1, k2) {
    console.log(`number is ${k1} and ${k2}`);
}
vovoid(289, 'Sorry to the mom 요양원 갈 떄까지 달리자');
// Function Type
let b5;
// b5 = {}; => fail function이 아니다.
// 화살표 함수를 사용자 지정 함수 타입 생성 가능
let b6;
b6 = (n1, n2) => {
    return n1 + n2;
};
b6(1000, 1000);
// Callback Type
function addMeals(cb, n1, n2) {
    cb(n1, n2);
}
function cbcb(n1, n2) {
    console.log(`Today Meal is ${n1} and desert is ${n2}`);
}
addMeals(cbcb, 'Pasta', 'CHOCO-CAKE');
// unKnown Type
let b7;
let b8;
b7 = 100;
b7 = 'Max';
// b8 = b7; => unkwoin 타입 할당 fail => 타입 검사
if (typeof b7 === 'string') {
    b8 = b7;
    console.log(b8);
}
// Never Type
function generateError(n1, n2) {
    throw { message: n1, errorCode: n2 };
}
generateError('SSSS', 'SSS11');
