let readOnlyArray: readonly number[] = [1, 2, 3];
type readOnlyPerson2 = Readonly<string[]>;

//error cases -
// readOnlyArray.push(1)

/**
 * Read Only Tuples -
 * Different notations are mentioned below
 */

type readOnlyPerson = readonly [string, string, number];
let readOnlyTuple: readOnlyPerson = ["John", "Smith", 32];

type readOnlyPersonTuple = Readonly<[string, string, number]>;
let readOnlyPersonTupleEg: readOnlyPersonTuple = ["John", "Scott", 10];
