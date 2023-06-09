// Arrays js

//const arr = new Array(100);
const arr = [1,2,3,4];

// No recommended
//arr.push(1);

let arr2 = [...arr, 5];
console.log(arr2);


const arr3 = arr2.map(function(number){
    return number * 2;
});

console.log(arr3);