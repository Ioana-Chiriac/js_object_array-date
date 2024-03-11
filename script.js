const myProducts = ['camasa', 'pantaloni', 'manusi'];
console.log('myproduct: ', myProducts);
console.log(`first item in myproduct ${myProducts[0]}`);
console.log(`leght of myproduct array is ${myProducts.length}`);

// adaugare de element
const newItem = 'pantofi';
myProducts.push(newItem);
console.log( `my product after push`, myProducts);

myProducts.shift();
console.log(`myproduct after shift():`, myProducts);

// tema curs 9 din urma

let student = true;
console.log(student);

let sirA = [`a`, `b`, `c`];
let sirB = [`1`, `2`, `3`];
let sirConcatenat = sirA +' '+ sirB;
console.log(sirConcatenat);

let nr1 = 5;
let nr2 = 3;
let rest = nr1 % nr2;
console.log(rest);

let name;
console.log(name);

let lungime = 2
let latime = 5;
console.log(latime * lungime);

const sir1 = ['clasa', 'ora', 'mate'];
const sir2 = ['clasa', 'ora', 'mate'];
const sirif = sir1 == sir2; 
console.log(sirif);

const sir3 = 1234;
const sir4 = 1234;
const sirif2 = sir3 == sir4; 
console.log(sirif2);

let birthyear = 1999
let currentyear = new Date().getFullYear();
let age = currentyear - birthyear;
console.log(`my age is ${age}`);

let numeC = 'claudia';
let numeD = 'cristina';
let myfullname = numeC +' '+ numeD;
let uppercaseName = myfullname.toUpperCase();
console.log(uppercaseName);

let number = 134;
let comparison = number >= 100;
console.log(comparison);
// object

let person = {
    name: "John",
    surname: "Doe",
    address: {
        street: "Cetatii",
        appartament: "b1",
        block: "7b",
        tronson: 1,
        zipcode: "100203",
        city: "Cluj-Napoca",
        Country: "Romania",
        County: "Cluj"
    },
    age: 32
};
console.log(`persone:`, person);
console.log(`nume persoane: ${person.name}`);
console.log(`cod postal: ${person.address.zipcode}`);

// bracket notation
console.log(`persone surename: ${person["surname"]}`);

// modificare valori 
person.name = "Ion";
console.log(`persone name:`, person.name);


// comparare obiecte 
const obj1 = {a: 10, b: true};
const obj2 = {a: 10, b: true};
const obj3 = obj1;

console.log(`obj1 === obj2`, obj1 === obj2);
console.log(`obj1 === obj3`, obj1 === obj3);

// comparar dupa propietati
const areEqual = obj1.a === obj2.a && obj2.b === obj3.b;
console.log(`areEqual:`, areEqual);

//stergere 

delete person.age;
console.log(person);

// afisare data
const date = new Date();
console.log(`date:`, date);

// acesare an
console.log(`an`, date.getFullYear());

// acesare luna
const months = ["Ianuarie", "Februaie", "Martie"];


// tema curs 10
const fructe = [ "mar", "portocala"];
const legume = [ "morcov", "brocoli"];

console.log ( fructe);

const alimente = fructe +`, `+ legume;
console.log(`alimente:`, alimente);

// adaug elemet

const elementNou = "banana";
fructe.push(elementNou);

console.log(fructe);
const element = "banana";




