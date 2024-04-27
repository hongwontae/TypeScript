"use strict";
function checkLiteral(a, b) {
    let a1 = a;
    let b1 = b;
    let ab1 = [a1.length, b1];
    return ab1.length;
}
;
const kkk = checkLiteral('10', 1000);
console.log(kkk);
function checkTwo(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toUpperCase() + b.toUpperCase();
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return;
    }
}
const kk2 = checkTwo('kkkk', 'mmzmzmz');
console.log(kk2);
const h1 = document.querySelector('h1');
console.log(h1.innerHTML);
