/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import takeLast from "./source.js"

test(({same, end}) => {
  same(
    takeLast(2)(["a", "b", "c"]),
    ["b", "c"]
  )

  end()
})

test(({same, end}) => {
  same(
    takeLast(1)(["a", "b", "c"]),
    ["c"]
  )

  end()
})
