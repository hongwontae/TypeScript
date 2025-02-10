const person : {
    name : string;
    age : number;
    hobbies : string [];
    role : [number, string];
} = {
  name: "Maxmilian",
  age: 30,
  hobbies : ['Sports', 'Cooking'],
  role : [2, 'author']
};

// person.role.push('admin');
// person.role[0] = 10;

person.role = [0, 'adimin'];


let area : string[]; 
area = ['Seoul', 'Deajun', 'Busan', 'Lotte'];



for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}


