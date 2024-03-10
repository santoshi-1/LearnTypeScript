/**
 *
 * predicate is a function that returns either a true or false value
 * This is a very tidious task to declare a function with multiple type of arguments.
 * This problem can be solved bynusing Generics
 *
 */

// type Filter = {
//   (array: number[], predicate: (item: number) => boolean): number[];
//   (array: string[], predicate: (item: string) => boolean): string[];
//   (array: object[], predicate: (item: object) => boolean): object[];
// };

//GENERICS -

// type Filter = {
//   <T>(array: T[], predicate: (item: T) => boolean): T[];
// };

/**
 *
 * In this type of declaration of generics, 
 * we have to explicitly mention the type of t for which we are implementing the filter function
 *
 * type Filter<T> = {
  (array: T[], predicate: (item: T) => boolean): T[];
};

const filter: Filter<string> = (array, predicate) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    if (predicate(item)) {
      result.push(item);
    }
  }

  return result;
};
 * 
 */

type Filter = <T>(array: T[], predicate: (item: T) => boolean) => T[];
// type Filter<T> = (array: T[], predicate: (item: T) => boolean) => T[];

const filter: Filter = (array, predicate) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    if (predicate(item)) {
      result.push(item);
    }
  }

  return result;
};

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function greaterThanSeven(item: number) {
  return item > 7;
}

let strArray = ["cat", "mat", "dog", "ball"];

console.log(filter(num, greaterThanSeven));

function filterCats(item: string) {
  return item === "cat";
}

console.log(filter(strArray, filterCats));
