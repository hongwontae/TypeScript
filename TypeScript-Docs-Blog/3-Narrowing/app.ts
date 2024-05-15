// let a = {
//     name : 'HWT',
//     age : 30
// }

// if('name' in a){
//     console.log('True!')
// }

// class Person{
//     name = 'jwt';
// }

// let ronaldo = new Person();

// if(ronaldo instanceof Person){
//     console.log('true instanceof')
// }

function numCheck(value : unknown) : value is number{
    return typeof value === 'number';
};

function numFunc(value : unknown) : void{
    if(numCheck(value)){
        console.log(`This is Number ${value.toString()}`);
    } else {
        console.log('This is Not number');
    }
};

numFunc(1000);


function errorGo() : never{
    throw new Error('This is Sparta')
}



