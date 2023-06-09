// Objects 


const person = {
    name: 'Jorge',
    age: 22,
    location:{
        city:{
            name: 'Chile'
        }
    }
}


console.log({person});

// Reference
const person2 = person;
person2.name = 'x4leqxinn';

// Same object
console.log(person);
console.log(person2);

// Clone BEST OPTION 
const person3 = {...person };
console.log(person3);