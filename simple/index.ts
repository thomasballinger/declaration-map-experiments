// cmd-click "works" (it foes to TypeScript source)
import { foo as foo_2, Baz as Baz2 } from "example-library/normal-typescript";
// cmd-click "doesn't work" (it goes to the .d.ts rollup instead of TypeScript source)
import { foo, Baz } from "example-library/api-extractor";

foo(); foo_2();

const a: Baz = {a: 1, b: 'asdf'};
const b: Baz2 = a;
console.log(a, b);
