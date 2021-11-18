class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greeting() {
    console.log(
      `Hello there ${this.firstName} ${this.lastName}. You are ${this.age} years old.`
    );
  }
}

module.exports = Person;
