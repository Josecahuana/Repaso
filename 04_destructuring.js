//before
const person = { namePerson: 'Luis', year: 30 };

let personName = person.namePerson;
let personYear = person.year;

console.log(personName); 
console.log(personYear); 

//after

const { dataName ,dataLastName} = dataPerson;

console.log(dataName, dataLastName);