/**
 * ACCESS MODIFIERS
 * Modified the name of the person outside the class. To prevent this use access modifiers
 * 1. Public - default access modifier. Can be accessed within the class and outside the class
 * 2. Protected - member of the class is only accessed within the parent class and the child class
 * 3. Private - member of the class is accessible only within the parent class
 */

class PersonAccess {
  private name: string;
  public age: number;
  protected email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  public getName() {
    return this.name;
  }
}

/**
 * Shorthand syntax for constructor initialization and member variables declaration -
 */

class PersonAccessCopy {
  constructor(
    private name: string,
    public age: number,
    protected email: string,
  ) {}

  public getName() {
    return this.name;
  }
}

class AdminClass extends PersonAccess {
  //Error case - Cannot access private variables within the sub class
  // public returnName() {
  //   return this.name;
  // }

  public returnEmail() {
    return this.email;
  }
}

const personAccessObj: PersonAccess = new PersonAccess(
  "John",
  34,
  "john@gmail.com",
);
const adminClassObj: AdminClass = new AdminClass("Mark", 42, "mark@gmail.com");

// Error - personAccessObj.name = "Smith";
console.log(personAccessObj.getName());
console.log(adminClassObj.returnEmail());
