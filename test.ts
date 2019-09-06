/* eslint-disable no-magic-numbers */
import takeLast from "./index.ts";

test(() => {
  expect(takeLast(2)(["a", "b", "c"])).toEqual(["b", "c"]);
});

test(() => {
  expect(takeLast(1)(["a", "b", "c"])).toEqual(["c"]);
});

test(() => {
  expect(takeLast(2)("abc")).toEqual("bc");
});

test(() => {
  expect(takeLast(1)("abc")).toEqual("c");
});
