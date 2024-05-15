type TK= {
    name : string,
    age : number,
    callYou : (a : string)=>void // 콜 시그니처x, 함수 표현식
};

interface TTk{
    name : string;
    age : number;
    callHer : (a : string)=>void;
};

function FTK(a : TK){
    let literal = `${a.name}은 ${a.age}`
    a.callYou(literal);
}

function FFTK(a : TTk){
    let literal = `${a.name}은 ${a.age}`
    a.callHer(literal);
}

FTK({name : 'HWT', age : 100, callYou : (a : string)=>{console.log(a)}});
FFTK({name : '안지연', age : 10000, callHer : (a : string)=>{console.log(a)}});


interface CallHim{
    (a : number) : void;
    player? : string
};

let func2 : CallHim = function(a){
   console.log(a);
   console.log(func2.player)
};
func2(100); 

// index type
interface Index{
    [user : string] : string;
};

let koala3121 : Index = {
    'usre' : 'HWT'
};

interface Index2{
    [user : number] : string;
};

let koala31212 : Index2 = ['str','str','str','str','str','str',];

type Tui ={
    [user : string] : string;
    
}
