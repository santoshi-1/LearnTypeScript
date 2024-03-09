let array1: number[] = [1, 2, 3];
let array2: Array<string> = ["Mark", "John"];
let array3: (string | number)[] = ["1", "2", 3, 4];

type Airplanes = Airplane[];

const airplanes: Airplanes = [
  {
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
  },
  {
    flightNumber: "SG103",
    airplaneModel: "A383",
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
  },
];
