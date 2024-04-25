// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(' ');
// })

// function 제네릭 타입
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// 제너릭 타입 제약사항
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);


// 

interface Lengthy{
    length : number
};

// let cool : Lengthy;
// cool = {length : 10};
// console.log(cool.length)

function countAndDescribe<T extends Lengthy>(element : T) : [T, string]{
    let aaa = 'Got no value'
    if(element.length === 1){
        aaa = 'Got 1 Element'
    } else if(element.length > 1){
        aaa = 'Got ' + element.length + ' Elements';
    }
    return [element, aaa];
}

const koala3121 = countAndDescribe(['Sports', 'Lookies']);
console.log(koala3121);

function extractAndConvert<T extends object, U extends keyof T>(obj : T, key : U){
   return obj[key];
};

const jhhh = extractAndConvert({name : 'HWT'}, 'name');
console.log(jhhh)


