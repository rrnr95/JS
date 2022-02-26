// Person constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there, ${this.firstName} ${this.lastName}`; 
}

const person1 = new Person('John', 'Doe.');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create a customer
const costumer1 = new Customer('Tom', 'Smith', '555555555', 'Standart');

console.log(costumer1);

// Custom greeting
Customer.prototype.greeting = function greeting() {
  return `Hello there, ${this.firstName} ${this.lastName}. Welcome to our company!`;
}

console.log(costumer1.greeting());


