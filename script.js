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

