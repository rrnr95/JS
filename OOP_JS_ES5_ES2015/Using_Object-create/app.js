const personPrototypes = {
  greeting: function() {
    return `Hello there, ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);

mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson')

console.log(mary.greeting()); 

const renato = Object.create(personPrototypes, {
  firstName: {value: 'Renato'},
  lastName: {value: 'Rosa'},
  age: {value: 25}
});

console.log(renato);
console.log(renato.greeting());