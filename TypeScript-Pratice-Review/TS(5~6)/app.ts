type German = string;
type Anglo = number;

type England = German | Anglo;

function checkLiteral(a : German,b : Anglo) : England{
    let a1 = a;
    let b1 = b;

    let ab1 = [a1.length, b1];
    return ab1.length;
};

const kkk = checkLiteral('10', 1000);
console.log(kkk);


type twoType = string | number;

function checkTwo(a : twoType,b : twoType){
    if(typeof a === 'string' && typeof b === 'string'){
        return a.toUpperCase() + b.toUpperCase();
    } else if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    } else {
        return;
    }
}

const kk2 = checkTwo('kkkk','mmzmzmz');
console.log(kk2);


const h1 = document.querySelector('h1')! as HTMLElement;
console.log(h1.innerHTML);


interface Start{
    [prop : string] : string
    value : 'HWT';
}

