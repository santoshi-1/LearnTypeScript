type stringOrNumber = number | string;

function addNumOrString(a: stringOrNumber, b: stringOrNumber) {
    
    if(typeof a === "number" && typeof b === "number")
        return a + b;
    else   
        return a.toString() + b.toString();
}

console.log(addNumOrString("Mark", 10));
console.log(addNumOrString(5, 10));

// error cases -
console.log(addNumOrString(null, 10));