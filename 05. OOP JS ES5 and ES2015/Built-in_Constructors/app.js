// String (Same with other types)

const name1 = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';
console.log(name2);
console.log(typeof name2);

// Just checking the value
if (name1 == name2) {
  console.log('YES');
} else {
  console.log('NO');
}


if (name1 === name2) {
  console.log('YES');
} else {
  console.log('NO');
}

console.log(name1);
