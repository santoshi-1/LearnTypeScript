enum AutomobileTypes {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors {
  red = "red",
  black = "black",
  blue = "blue",
  white = "white",
  silver = "silver",
}

/**
 *
 * Different types of generics passes to a single interface
 *
 */

interface AutomobileInterface<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

const ferrari: AutomobileInterface<
  AutomobileTypes,
  AutomobileBrands,
  AutomobileColors
> = {
  type: AutomobileTypes.car,
  brand: AutomobileBrands.ferrari,
  colors: [AutomobileColors.red, AutomobileColors.black],
  description: "A red ferrari car!",
};

const honda: AutomobileInterface<string, string, string> = {
  type: "car",
  brand: "honda",
  colors: ["blue", "white"],
  description: "A honda car!",
};

const toyota: AutomobileInterface<string, AutomobileBrands, number> = {
  type: "car",
  brand: AutomobileBrands.toyota,
  colors: [6676, 5454],
  description: "A toyota car!",
};

console.log(ferrari);
console.log(honda);
console.log(toyota);

/**
 * USING INTERFACE WITH CLASSES
 */

class Car
  implements AutomobileInterface<string, AutomobileBrands, AutomobileColors>
{
  public type: string = "car";
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string,
  ) {}
}

const ferrariObj: Car = new Car(
  AutomobileBrands.ferrari,
  [AutomobileColors.red, AutomobileColors.black],
  "A ferrari car!",
);

console.log(ferrariObj);

interface CommercialVehicle {
  capacity: string;
  licenseRenewalDate: Date;
}

/**
 * Implementing multiple interfaces in a single class
 * classes can inherit any number of interfaces but they can only inherit a single class
 */
class Truck
  implements
    AutomobileInterface<string, AutomobileBrands, AutomobileColors>,
    CommercialVehicle
{
  public type: string = "truck";
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string,
    public capacity: string,
    public licenseRenewalDate: Date,
  ) {}
}

const toyotaObj: Truck = new Truck(
  AutomobileBrands.toyota,
  [AutomobileColors.blue],
  "A toyota truck!",
  "15 Tonners",
  new Date(),
);

console.log(toyotaObj);
