/**
 *
 * Here, U can be of any type
 * case 1: U is array of numbers.
 * case 2: U is array of strings
 *
 */

type MapFunction = {
  <T, U>(array: T[], predicate: (item: T) => U): U[];
};

const map: MapFunction = (array, predicate) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let sqrtValue = predicate(array[i]);
    result.push(sqrtValue);
  }

  return result;
};

const sqrtNumber = (item: number) => {
  return item * item;
};

const convertNumToString = (item: number) => {
  return item.toString();
};

let numArr = [1, 2, 3, 4, 5];

console.log(map(numArr, sqrtNumber));
console.log(map(numArr, convertNumToString));
