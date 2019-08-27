/* eslint-disable no-magic-numbers */
import {test} from "tap";

import takeLast from "./";

test(({same, end}) => {
  same(
    takeLast(2)(["a", "b", "c"]),
    ["b", "c"]
  );

  end();
});

test(({same, end}) => {
  same(
    takeLast(1)(["a", "b", "c"]),
    ["c"]
  );

  end();
});

test(({same, end}) => {
  same(
    takeLast(2)("abc"),
    "bc"
  );

  end();
});

test(({same, end}) => {
  same(
    takeLast(1)("abc"),
    "c"
  );

  end();
});
