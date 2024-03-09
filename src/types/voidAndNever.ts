/**
 *
 * Void is assigned to a function which doesnot return any value.
 * Never type is a value that is assigned to a function which never completes and always throws an error
 */

const addNmber = (): void => {
  console.log(2 + 4);
};

addNmber();

const throwNewError = (): never => {
  throw new Error("Your program terminated because of error!");
};

throwNewError();
