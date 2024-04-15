function add(n1 : number, n2 : number) : number{
    return n1 + n2
}

function printResult(num : number):void{
    console.log('Result : ' + num);
}

printResult(add(5,12));

// --------------------------------------------------

let combinesValues : (a : number, b : number)=> number;

combinesValues = add;

console.log(combinesValues(8,8));


// ------------------------------------------------------
function cakeEat(n3 : number, n4 : number, cb : (num : number)=> void ){
    const result = n3 + n4;
    cb(result);
}

function systemPrintOut(data : number){
    console.log(data);
}

cakeEat(10,20, systemPrintOut);




