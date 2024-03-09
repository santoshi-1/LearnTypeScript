type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

//Function call signature
//TS way of creating a union of call signature 1 and call signature 2 above
//never is used to throw an error.
type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string,
  ): Reservation | never;
  (
    departureDate: Date,
    departingFrom: string,
    destination: string,
  ): Reservation | never;
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string,
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }

  throw new Error("Please provide valid details to reserve a ticket");
};

console.log(reserve(new Date(), new Date(), "NYC", "DC"));
console.log(reserve(new Date(), "NYC", "DC"));
