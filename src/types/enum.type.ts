/***
 *
 * Enums are used to enumerate the values of a data type.
 * In the below data structure, it is very difficult to remember the role type
 * to be assigned to a person if the number of roles are huge.
 *
 * This can be avoided by using roles as constants in Javascript.
 * Enums offer better solution in typescript.
 * By default enums assign a value of the index admin - 0, author - 1, editor - 2
 *
 */

// import * as roles from "./roles";
import { Roles } from "./roles";

type person = {
  name: string;
  email: string;
  password: string;
  role: number;
};

// Output value is 2
console.log(Roles.editor);
//To get the literal value -

/**
   * enum Roles {
          admin = "admin",
          author = "author",
          editor = "editor",
      }
  */

const personEnum: person = {
  name: "John",
  email: "John@gmail.com",
  password: "12345",
  role: Roles.admin,
};
