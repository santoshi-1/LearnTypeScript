interface MapLocation {
  lat: number;
  long: number;
}

function AddLocation(lat: number, long: number) {
  return <T extends { new (...args: any[]): {} }>(classConstructor: T) => {
    return class extends classConstructor {
      public mapLocation: MapLocation;
      constructor(...args: any[]) {
        super(...args);
        this.mapLocation = { lat, long };
      }
    };
  };
}

@AddLocation(1.234, 1.876)
class Person_Class {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

const object_Person: Person_Class = new Person_Class("John", 32);
console.log(object_Person);
