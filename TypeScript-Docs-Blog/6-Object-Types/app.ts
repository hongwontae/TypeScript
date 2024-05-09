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

interface StartMember {
    name : string
}

interface BehindMember {
    who : string
    // ko : bigint => 불가 idnex signature 에러
}

interface BackMember extends StartMember, BehindMember {
    [props : string] : string | number;
    age : number
};

let c1 : BackMember;
c1 = {
    age :27,
    name : 'hwt',
    who : 'Are you'
}
