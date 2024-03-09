/**
 * 
 * Index signatures can coexist with other properties.
 *  orderProperty:  number;
    [key: string | number]: string | number; // index signatures

 */

type Airplane = {
  flightNumber: string;
  airplaneModel: String;
  datOfDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    orderProperty: number;
    [key: string | number]: string | number; // index signatures.
  };
};

const airplane: Airplane = {
  flightNumber: "SG102",
  airplaneModel: "A380",
  datOfDeparture: "02/12/24",
  timeOfDeparture: "23:00",
  from: "JFK",
  to: "DCA",
  seats: {
    orderProperty: 1,
    "10A": "Jhonny",
    "10B": "Mark",
    1: 30,
  },
};
