const characters = ['Chiaki','Kuromi','Pikachu']

const [ ,character2 ] = characters;

console.log(character2);

//const getArr = () => ['ABC',123];

//const [ letters,numbers ] = getArr();


// Challenge
// 1. First value name
// 2. Second value setName

const getUseState = (value) => {
    return [ value, () => { console.log('Hello World') } ];
}

const [ name, setName ] = getUseState('x4leqxinn');


console.log(name);
setName();


