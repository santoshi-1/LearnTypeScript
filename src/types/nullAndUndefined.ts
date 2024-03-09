/**
 *
 * null - something that JS is not able to compute
 * undefined - something that has not been defined
 *
 */
let user: string;
//value of user is undefined
//console.log(user)

//output of below console is null since saveId is not present in the DOM.
let saveButton = document.getElementById("saveId");
console.log(saveButton);

// Null & Undefined in TypeScript -

let loggedInUsername: string;
const users = [
  { name: "Obby", age: 24 },
  { name: "Hina", age: 28 },
];

const loggedInUser = users.find((user) => user.name === loggedInUsername);
console.log(loggedInUser.age);

// To prevent such errors as in to tell TS that this element exists, put an exclamation mark at the end.
// If this exclamation is not provided, TS will highlight the error.
// Other way to avoid such errors is to use union of HTMLElement | null
let saveButtonValue1: HTMLElement = document.getElementById("save")!;
let saveButtonValue2: HTMLElement | null = document.getElementById("save");

if (saveButtonValue2 !== null) {
  // do something
}
console.log(saveButtonValue1);
