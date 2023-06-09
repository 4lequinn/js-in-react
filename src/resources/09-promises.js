import { getHeroeById } from './resources/08-imports';

// Promises
// Async

// const promise = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000)
// });


// promise.then( (heroe) => {
//     console.log('Heroe', heroe);
// }).catch(err => console.warn(err));



const getHeroeAsync = (id) => {
    return new Promise((resolve, reject) => {
         setTimeout( () => {
            const heroe = getHeroeById(id);
            heroe ? resolve(heroe) : reject('Error heroe not found');
         }, 2000)
    });
}

getHeroeAsync(10).then( (heroe) => {
    console.log('Heroe', heroe);
}).catch(err => console.warn(err));


