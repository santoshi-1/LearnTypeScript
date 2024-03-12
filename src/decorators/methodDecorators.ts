enum Manufacturer {
  boeing = "boeing",
  airbus = "airbus",
}

interface InterfaceAirCraft {
  aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
  pilotName?: () => void;
}

/**
   * Method decorators takes 3 arguments unlike the class decorators which  take only one argument.
   * classPrototype
   * methodName
   * descriptor
   * 
   * function MethodDecorator(
    classPrototype: Object,
    methodName: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log(classPrototype);
    console.log(methodName);
    console.log(descriptor);
  
    descriptor.writable = false;
  }
   * 
   */

function MethodDecorator(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDescriptor,
) {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);

  descriptor.writable = false;
}

// STATIC METHOD DECORATORS

function StaticMethodDecorator(
  constructor: Object,
  methodName: string,
  descriptor: PropertyDescriptor,
) {
  console.log(constructor);
  console.log(methodName);
  console.log(descriptor);

  descriptor.writable = false;
}

class ClassAirplane implements InterfaceAirCraft {
  constructor(
    public _aircraftModel: string,
    private pilot: string,
  ) {
    console.log("Aircraft class instantiated in Constructor function!");
  }

  @MethodDecorator
  public pilotName() {
    console.log(this.pilot);
  }

  @StaticMethodDecorator
  public static seatCount(): void {
    console.log("150 Seats.");
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airPlaneObject: InterfaceAirCraft = new ClassAirplane(
  Manufacturer.airbus,
  "John",
);

airPlaneObject.pilotName = () => {
  console.log("Function Changed!");
};

airPlaneObject.pilotName();
