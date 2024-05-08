type func1 = (a : number)=>void;

function add(a : number,b : number,cb : func1){
    let sum = a+b;
    cb(sum)
};

function con(a : number){
    console.log(a)
}

add(10,10,con);

type callSignature = {
    (a : number) : void
    (a : string) : void
};

let a2: callSignature = (a : number | string)=>{
    if(typeof a === 'number'){
        console.log(a);
    } else {
        console.log(a.toString())
    }
}


console.dir(a2);

type combination = string | number


function check(a : number, b : number) : number;
function check(a : string, b : string) : string;
function check(a : combination, b : combination){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}







