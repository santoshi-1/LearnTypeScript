

/**
 * 
 * firstname lastname & age - array with fixed length with same order represented in the array
 * ? - optional property (age below is optional)
 * tuples help to strictly type arrays
 * shape of array is strictly defined. But it is a heterogeneous array. No of items can vary.
 * 
 */

let person: [string, string, number?];
person = ["John", "Doe", 34];

//error cases -
// person = [24, "John", 34];

// noOfStudents, passed, array of names
type listOfStudents = [number, boolean, ...string[]];
const passingStudents: listOfStudents = [3, true, "John", "Stella", "Joe"];
const failingStudent: listOfStudents = [1, false, "Daniel"];
