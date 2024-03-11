/**
 * Static methods are used without class instantiation
 */

class Automobile {
  public static color: string = "red";

  public static calculateMileage(miles: number, litres: number) {
    return miles / litres;
  }
}

console.log(Automobile.color);
console.log(Automobile.calculateMileage(50, 10));

// Math is a static method below
const pi = Math.PI;
console.log(pi);
