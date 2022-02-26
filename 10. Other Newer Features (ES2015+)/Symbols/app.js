// // Create symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(sym2);
// console.log(typeof sym1);

//console.log(Symbol() === Symbol());

// // Error
// console.log(`Hello ${sym1}`);
// // Needs wrapper
// console.log(`Hello ${String(sym1)}`);

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.KEY3 = 'Prop3';
myObj.KEY4 = 'Prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// // SYMBOLS ARE NOT ENUMERABLE IN FOR...IN
// for (let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);  
// }

// // SYMBOLS ARE INGNORED BY JSON.stringify
// console.log(JSON.stringify({key: 'prop'}));
// console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));
