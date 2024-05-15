"use strict";
// arr type +
function rest(...args) {
    return args;
}
;
const rest2 = rest(1, 2, 3, 4, 5);
console.log(rest2);
// enum
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 5] = "Fri";
    Week[Week["Sat"] = 6] = "Sat";
})(Week || (Week = {}));
console.log(Week.Fri);
console.log(Week[1]);
