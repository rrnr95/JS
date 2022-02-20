class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there, ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;  
  }

  static getMembershipCost() {
    return 500;
  }
}

const renato = new Customer('Renato', 'Rosa', '910000000', 'Standart');

console.log(renato);

console.log(renato.greeting());

console.log(Customer.getMembershipCost());
