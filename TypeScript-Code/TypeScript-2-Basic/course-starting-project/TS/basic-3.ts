enum Role {
    ADMIN, READ_ONLY, AUTHOR
};

const person = {
    name : 'Maximilian',
    age : 30,
    hobbies : ['Sports', 'Cooking'],
    role : Role.READ_ONLY
}

console.log(person.role)