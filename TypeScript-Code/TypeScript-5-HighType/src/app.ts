// 형 변환
const paragraph = document.querySelector('p');

// const userInputEl = <HTMLInputElement>document.getElementById('user-input');
// userInputEl.value = 'HI There';

const userInputEl = document.getElementById('user-input')! as HTMLInputElement;
userInputEl.value = 'HI THERE';


// 인덱스 속성
interface ErrorContainer {
    id : string;
    [prop : string] : string;
}

// 함수 오버로드
type Combination = string | number;

function add(a : string, b : string) : string;
function add(a : number, b : number) : number;
function add(a : Combination, b : Combination){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.valueOf() + b.toString();
    }
    return a+b;
}

let re = add('Max', 'MARCOS');
re.toLowerCase();
console.log(re);


// 옵셔널 체이닝
const fetchData = {
    job : [1,2,3],
    name : 'striker',
    age : 27
}

console.log(fetchData?.age);



