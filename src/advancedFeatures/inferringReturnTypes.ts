function returnString() {
  return 123;
}

type FunctionReturnType<T> = T extends () => infer R ? R : T;

type NewType = FunctionReturnType<typeof returnString>;
// return type inferred as number
