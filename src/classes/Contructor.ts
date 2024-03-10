/**
 *
 * Greet method does not exist in the first console statement directly.
 * However, it is present inside the prototype.
 * Prototypes - Default way of leveraging inheritance in javascript.
 *
 */
class PersonClass {
  name: string;
  email: string;
  greet() {
    return `Hello ${this.name}`;
  }
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const personObject1 = new PersonClass("John", "john@gmail.com");
const personObject2 = new PersonClass("Scott", "scott@gmail.com");

console.log(personObject1);
console.log(personObject2);
console.log(personObject1.greet());
console.log(personObject2.greet());
