function intro(name: string, age: number, country?: string): string {
  if (country) {
    return `My name is ${name} and age is ${age}. I live in ${country}`;
  }
  return `My name is ${name} and age is ${age}`;
}

const intro2 = (name: string, age: number): string => {
  return `My name is ${name} and age is ${age}`;
};

const intro3 = function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`;
};

console.log(intro("John", 35));
console.log(intro("John", 35, "canada"));

enum AgeUnit {
  years = "years",
  months = "months",
}

type greetingFunction = (greeting: string) => string;

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
  greet: greetingFunction;
};

const personObj: Person = {
  name: "John",
  age: 30.5,
  ageUnit: AgeUnit.years,
  country: "USA",
  greet: (greeting) => {
    return `${greeting}${personObj.name}`;
  },
};
const convertAgeToMonths = (person: Person): Person => {
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;

  return person;
};

console.log(convertAgeToMonths(personObj));
console.log(personObj.greet("Good Morning "));
