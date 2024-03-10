class PersonCopy {
  // It is set to number or undefined because untill the set age function is called, this variable goes uninitialized
  // private _age: number | undefined,

  private testPersonAge(age: number) {
    if (age > 200 || age < 0) {
      throw new Error("Age must be in between 0-200");
    }

    return age;
  }

  constructor(
    private _name: string,
    private _age: number,
  ) {
    this.testPersonAge(_age);
  }

  public set age(age: number) {
    this.testPersonAge(age);
    this._age = age;
  }

  public get age() {
    return this._age;
  }

  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }
}

const johnObj1: PersonCopy = new PersonCopy("John", 34);
console.log(johnObj1.name);
console.log(johnObj1.age);

//Error Cases -
const johnObj2: PersonCopy = new PersonCopy("John", 210);
console.log(johnObj2.name);
console.log(johnObj2.age);
