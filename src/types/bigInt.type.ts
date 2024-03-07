/**
 * BigInt can be created in two ways in javascript.
 * 1. Using constructor
 * 2. Use literal syntax
 * 
 * numbers in javascript represent whole numbers upto 2^53
 */

let bigInt1 = BigInt(967854);
let bigInt2 = 12345678n;

console.log(bigInt1)

const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt)

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

console.log(safeIntPlusOne === safeIntPlusTwo);

/**
 * Outputs - 
 * 
 * 9007199254740991
 * 9007199254740992 
 * 9007199254740992
 * 
 * last two outputs are same. It means javascript does not increase beyond this number
 * 
 */


// Declaration of BigInt in typescript - 


let a: bigint = BigInt(1234567)
let b: bigint = 12345678n;

//BigInts cannot have decimal values/
let c: bigint = 123.45n

console.log(b - a);

//Cannot use inbuit Math objevcts with bigint

let d : bigint = Math.log(a);