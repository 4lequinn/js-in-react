// destructuring

const person = {
    name: 'Jorge',
    age: 22,
    job: 'Mona xina',
    country: {
        id: 1,
        name: 'Chile',
    }
}

// Normal
console.log(person.name);
console.log(person.age);


// Destructuring
const { name, age:personAge } = person;

// Get values
console.log(personAge);


// Destructuring args
const getPerson = ({name, age, job = 'Developer'}) => {
    console.log(name, age, job);
}

// Get values
// Option 1
const { country: {id, name:countryName} } = person;

// Option 2
const { country } = person;
const { id:countryId, name:countryDescription } = country;

