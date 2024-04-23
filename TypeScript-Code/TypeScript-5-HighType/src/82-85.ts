var co = console.log.bind(document);

// Intesection Type
type employee = {
  name: string;
  list: string[];
};

type lineAdmin = {
  age: number;
  lineName: string;
};

type elevatedEm = employee & lineAdmin;

let savage: elevatedEm = {
  name: "HONG WON TAE",
  age: 27,
  list: ["HWT", "Start Line-1"],
  lineName: "Start Line-1",
};

// Type Guard
type team = {
  name: string;
  startYear: number;
};

type player = {
  pName: string;
  translateYear: number;
};

type soccerTeam = player & team;

function systemOutPrint(p: soccerTeam) {
  console.log("Goals" + p.name);

  console.log(p.startYear);
}

systemOutPrint({
  name: "hwt",
  startYear: 2019,
  pName: "",
  translateYear: 0,
});

class Car{
    drive(){
        console.log('Car is Rabbit inccident')
    }
}

class Trunk{
    drive(){
        console.log('Drive is PERson accident')
    }
    loadGym(){
        console.log('loaadddd.d.d.d.')
    }
}

type Vehicle = Car | Trunk;

const v1 = new Car();
const v2 = new Trunk();

function useVehicle(ve : Vehicle){
    ve.drive();
    if('loadGym' in  ve){
        ve.loadGym();
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird{
    type : 'bird';
    flyingSpeed : number;
    kkkkk : 20;
}

interface Horse {
    type : 'horse';
    runningSpeed : number
}

type Animal = Bird | Horse;

function moveAnimal(animal : Animal){
    let speed;
    switch(animal.type){
        case "bird" :
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    };
    console.log(`what is speed? ${speed}`);
};

moveAnimal({type : 'bird', flyingSpeed : 1000, kkkkk : 20});


