interface al{
    readonly prop : string;
    name : string;
    arr : string[]

}

let a : al
a = {
    name : 'hwt',
    prop : 'Cool',
    arr : ['Savage']
};
console.log(a);

a.arr.push('222');
console.log(a);

type ttf= {
    readonly name : string;
    age : number,
    cool : string,
    [props : string] : string | number
}

let saint : ttf = {
    age : 30,
    cool : 'ww',
    name : 'cmcm',
}

