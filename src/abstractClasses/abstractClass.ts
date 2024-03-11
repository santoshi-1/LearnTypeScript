/**
 * Abstract classes cannot be instantiated
 */

type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}
  public addHolidays = (holidays: Holidays) => {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  };

  //Abstract methods do not have a body
  public abstract printHolidays(): void;
}

class ITDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("IT Department");
  }

  //Method overriding
  public printHolidays() {
    if (this.holidays.length == 0) {
      return console.log("No Holidays!");
    }

    console.log(`Here is the list of Holidays for ${this.name}`);

    this.holidays.forEach((holiday, index) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}

const itHolidays: Holidays = [
  {
    date: new Date(2022, 11, 1),
    reason: "IT Department Day",
  },
  {
    date: new Date(2022, 12, 25),
    reason: "Christmas",
  },
];

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("Admin Department");
  }

  // Method overriding
  public printHolidays() {
    if (this.holidays.length == 0) {
      return console.log("No Holidays!");
    }

    console.log(`Here is the list of Holidays for ${this.name}`);

    this.holidays.forEach((holiday, index) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}

const adminHolidays: Holidays = [
  {
    date: new Date(2022, 10, 1),
    reason: "IT Department Day",
  },
  {
    date: new Date(2022, 12, 25),
    reason: "Christmas",
  },
];

const itDeptObj: ITDepartment = new ITDepartment();
itDeptObj.addHolidays(itHolidays);
itDeptObj.printHolidays();
const adminDeptObj: AdminDepartment = new AdminDepartment();
adminDeptObj.addHolidays(adminHolidays);
adminDeptObj.printHolidays();

//Error case - cannot creact objects for abstract class
// const department: Department = new Department();
