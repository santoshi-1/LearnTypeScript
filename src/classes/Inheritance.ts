/**
 * INHERITANCE
 */

class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class AdminUser extends User {
  isAdmin: boolean = true; // default value is set to true
  userReporting: number;

  constructor(name: string, email: string, age: number, userReporting: number) {
    super(name, email, age);
    this.userReporting = userReporting;
  }
}

class AuthorUser extends User {}

const userObj: User = new User("John", "john@gmail.com", 34);
const adminObj: AdminUser = new AdminUser("Scott", "scott@gmail.com", 38, 5);

console.log(userObj);
console.log(adminObj);
