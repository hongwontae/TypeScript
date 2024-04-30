// test

// const testA1 : Array<string> = ['1','2'];

// const promise : Promise<string> = new Promise((resolve, reject)=>{
//     if(1==1){
//         resolve('Resolve')
//     } else{
//         reject('Reject')
//     }
// });

// promise.then(data => console.log(data.length));

// function add<T>(a : T){
//     return a;
// };
// const addResult = add<number>(10);
// console.log(addResult);



// function addPlus<T extends number , U extends string>(a: T, b : U){
//     let nData = a+Math.random();
//     let sData = b+' KoreaMan';

//     let arr = [nData, sData];
//     return arr;
// }

// const a = addPlus(4, 'UTube');
// console.log(a);

// interface CheckLength{
//     length : number;
// }

// function lengthTypeCheck<T extends CheckLength >(a : T, b : T){
//     let AL = a.length;
//     let BL = b.length;
//     let com = AL+BL;
//     return com;
// };

// function okey<T extends object, U extends keyof T>(a : T, b : U){
//     return a[b];
// };

// const okey2 = okey({name : 'HWT'}, 'name');
// console.log(okey2)









