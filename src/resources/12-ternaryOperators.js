const userActive = true;
let message = (userActive) ? 'activo' : 'inactivo';
let message2 = userActive && 'activo'; // Return 'activo'
console.log(message);
console.log(message2);