/** @public */
export function foo() {
  return bar() + bar();
}

/** @public */
export type Baz = {
  a: number;
  b: string;
};

export function bar(n: number = 1) {
  return n;
}
