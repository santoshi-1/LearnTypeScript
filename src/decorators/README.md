- For typescript 4.x version, the decorator function takes a parameter target of type function.
- Decorators are executed only once during the compilation time.
- Any changes to the class properties, can be done using the decorator functions.
- Entire class is within the decorators.
-
-
- Decorator Factory - function that takes some arguments and returns a decarator function.
- It acts as a higher order function i.e, encapsulates the decarator function.
-
- can add properties, remove properties to a class. Decorators are also used to generate database schema

// Example of Decarator Factory -

function LogClassFactory(lastName: string) {

// DECORATOR FUNCTION

return function LogClass(target: any, context: any) {
console.log(target);
console.log(context);
console.log(lastName);
};
}

@LogClassFactory("Doe")
class MyClass {}
