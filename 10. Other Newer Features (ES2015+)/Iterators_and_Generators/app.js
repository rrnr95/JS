// // Iterators
// function namesIterator(names) {
//   let nextIndex = 0;


//   return {
//     next: function() {
//       return nextIndex < names.length ? {value: names[nextIndex++], done: false} : 
//       {done: true};
//     }
//   }
// }

// // Create an array of names
// const namesArr = ['Dario', 'Rafael', 'Renato'];

// // Init Iterator and pass in the names array
// const names = namesIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// // Generators
// function* sayNames() {
//   yield 'Dario';
//   yield 'Rafael';
//   yield 'Renato';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID Creator
function* createIds() {
  let index = 1;

  while(true){
    yield index++;
  }
}

const generateID = createIds();

console.log(generateID.next().value);
console.log(generateID.next().value);
console.log(generateID.next().value);
console.log(generateID.next().value);