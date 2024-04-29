"use strict";
// let numArr = [1,2,3,4];
// numArr.map((ele, idx, arr)=>{
//     console.log(ele);
// })
function objCheck(oo) {
    const objPropery = oo.age;
    console.log(objPropery); // undefined가 나올 수 도 있다.
    return oo;
}
const aaa = objCheck({ name: 'hwt' });
console.log(aaa);
