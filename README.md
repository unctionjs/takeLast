# @unction/takeLast

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> number => Array<V> | string => Array<V> | string

Returns the last N of a list of ordered values.

``` javascript
takeLast(2)([1, 2, 3]) // [2, 3]
takeLast(1)([1, 2, 3]) // [3]
takeLast(2)("abc") // "bc"
takeLast(1)("abc") // "c"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/takeLast.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/takeLast.svg?maxAge=2592000&style=flat-square
