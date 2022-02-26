class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  // Methods go to the prototype
  gretting() {
    return `Hello there, ${this.firstName} ${this.lastName}`;
  }

  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName){
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '3-13-1995');

console.log(mary);
console.log(mary.gretting());
console.log(mary.calculateAge());

mary.getsMarried('Rosa');
console.log(mary.gretting());

const sum = Person.addNumbers(1,2);
console.log(sum);
