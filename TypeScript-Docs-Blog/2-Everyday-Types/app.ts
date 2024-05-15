// arr type +
function rest(...args : number[]) :number[]{
    return args;
};

const rest2 = rest(1,2,3,4,5);
console.log(rest2);


// enum
enum Week {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
  }
  
console.log(Week.Fri);
console.log(Week[1]);




