"use strict";
// let numArr = [1,2,3,4];
// numArr.map((ele, idx, arr)=>{
//     console.log(ele);
// })
// function objCheck(oo : {name : string, age? : number}){
//     const objPropery = oo.age;
//     console.log(objPropery); // undefined가 나올 수 도 있다.
//     return oo
// }
// const aaa = objCheck({name : 'hwt'});
// console.log(aaa);
const input1 = document.getElementById('input1');
const button = document.getElementById('button');
const div = document.getElementById('div1');
input1.addEventListener('change', () => {
    let text = input1.value;
    console.log(text);
    div.textContent = text;
});
let cool;
cool = 'as-number';
console.log(cool);
