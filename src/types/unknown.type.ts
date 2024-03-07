// TS doesnot know if the number type is a number or not so it throws a error

function multiply(number: unknown) {
    if(typeof number === "number")
        return number * 2;

    return "Please provide a valid number";

}

console.log(multiply(4));
console.log(multiply("Hello"))

/**
 * unknown type is better type than any. 
 * Beacuse if any is used here instead of unknown, it doesnot throw any error.
 * Unknown type forces to check the type of value before using it in the program. 
 */
