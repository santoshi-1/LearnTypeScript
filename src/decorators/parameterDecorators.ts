enum ManufacturerEnum {
  boeing = "boeing",
  airbus = "airbus",
}

/**
 *
 * @param classPrototype
 * @param methodName
 * @param index - position of the parameter in the method signature
 */

function ParameterDecorator(
  classPrototype: object,
  methodName: string,
  index: number,
) {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

class ClassAirCraft {
  constructor(public _aircraftModel: string) {
    console.log("Aircraft class instantiated in Constructor function!");
  }

  public pilotName(name: string, @ParameterDecorator lastName: string) {
    console.log(name, lastName);
  }

  public static seatCount(): void {
    console.log("150 Seats.");
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}
