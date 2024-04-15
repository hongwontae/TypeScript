let userInput : unknown;
let num1 : number;

userInput = 10;

// num1 = userInput;
// => 타입검사 x => 실패

if(typeof userInput === 'number'){
    num1 = userInput;
}


// ------------------------------------------------------


