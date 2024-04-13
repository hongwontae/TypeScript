function add(n1: number, n2: number, showResult: boolean, resultP: string) {
  if (showResult) {
    console.log(`${resultP} ${n1 + n2}`);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is";

const result = add(number1, number2, printResult, resultPhrase);
