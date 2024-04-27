// function Logger(logged : string){
//     console.log('Logger Function')
//     return function(constructor : Function){
//         console.log(logged)
//         console.dir(constructor);
//     }
// }

// function h1Change(a : string, b : string){
//     console.log('h1-Change-Function')
//     return function(_ : Function){
//         console.log('h1Change')
//         const appDiv = document.querySelector(`#${b}`) as HTMLElement;
//         appDiv.innerHTML = a;
//     }
// }

// @Logger('Hello-World')
// @h1Change('<h1>Hello World</h1>','app')
// class Person{
//     name = 'Max';

//     constructor(){
//         console.log('Creating person obj');
//     }

// }

function Logger1(con1 : Function){
    console.log('Logger1 func')
    console.log(con1);
}

function Logger2(con2 : Function){
    console.log('Logger2 func')
    console.log(con2);
}   

@Logger1
@Logger2
class Person {
    name = 'HWT';
    age = 30;

    constructor(){
        console.log('crating Person OBJ');
    }
}



