function personFunction(name: string, age: number) {
  return {
    name: name,
    age: age,
  };
}

type GetFirstArgumentOfAnyFucntion<T> = T extends (
  first: infer E,
  ...args: any[]
) => any
  ? E
  : never;

type GetSecondArgumentOfAnyFucntion<T> = T extends (
  first: any,
  second: infer E,
  ...args: any[]
) => any
  ? E
  : never;

type FirstArgument = GetFirstArgumentOfAnyFucntion<typeof personFunction>;
type SecondArgument = GetSecondArgumentOfAnyFucntion<typeof personFunction>;
