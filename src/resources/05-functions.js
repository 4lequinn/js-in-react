//  Functions

/*
function say(name){
    return  `Hola ${ name }`;
}
*/

// No recommended
//say = 10

// Better 
const say = function(name){
    return `Hola ${name}`;
}

// Lambda or arrow function
const say2 = (name) => {
    return `Hola ${name}`;
}

// Only return 
const say3 = (name) => `Hola ${name}`;
// Void function
const say4 = () => `Hello world`;

// Extend body
const getUser = () => ({uid: '69691937D',username: 'x4leqxinn'});


console.log(say);


// Challenge:
// 1. Convert to arrow function
// 2. return implicit object
// 3. Tests

function getActiveUser(name){
    return {
        uid: '69691937D',
        username: name
    }
}

const activeUser = getActiveUser('x4leqxinn');
console.log(activeUser);


const activeUser2 = (name) => ({uid: '69691937D',username: name});

console.log(activeUser2('Jorge'));
