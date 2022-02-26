// // Destructuring Assignment
// let a, b;
// [a, b] = [100, 200];

// // Rest pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];

// // console.log(rest);

// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// ({ a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 });


// // Array Destructuring
// const people = ['Dario', 'Rafael', 'Renato'];
// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// // Parse array returned from function
// function getPeople() {
//   return ['Dario', 'Rafael', 'Renato'];
// }

// let person1, person2, person3 = getPeople();

// console.log(person1, person2, person3);

// Object Destructuring
const person = {
  name: 'Renato Rosa',
  age: 26,
  city: 'Entroncamento',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello');
  }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();