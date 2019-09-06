/* eslint-disable no-magic-numbers */
import takeLast from "./index";

test("works", () => {
  expect(takeLast(2)(["a", "b", "c"])).toEqual(["b", "c"]);
});

test("works", () => {
  expect(takeLast(1)(["a", "b", "c"])).toEqual(["c"]);
});

test("works", () => {
  expect(takeLast(2)("abc")).toEqual("bc");
});

test("works", () => {
  expect(takeLast(1)("abc")).toEqual("c");
});
