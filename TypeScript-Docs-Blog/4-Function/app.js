"use strict";
function add(a, b, cb) {
    let sum = a + b;
    cb(sum);
}
;
function con(a) {
    console.log(a);
}
add(10, 10, con);
let a2 = (a) => {
    if (typeof a === 'number') {
        console.log(a);
    }
    else {
        console.log(a.toString());
    }
};
console.dir(a2);
function check(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
