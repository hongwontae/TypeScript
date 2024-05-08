"use strict";
function rest(...args) {
    return args;
}
;
const rest2 = rest(1, 2, 3, 4, 5);
console.log(rest2);
