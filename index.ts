import lessThan from "@unction/lessthan";
import append from "@unction/append";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import length from "@unction/length";
import fresh from "@unction/fresh";

import {OrderedEnumerableType} from "./types";

export default function takeLast<V> (count: number) {
  return function takeLastCount (orderedEnumerable: OrderedEnumerableType<V>): OrderedEnumerableType<V> {
    const total = length(orderedEnumerable);


    return reduceWithValueKey((accumulated: OrderedEnumerableType<V>) => (value: V) => (index: number): OrderedEnumerableType<V> => {
      if (lessThan(index)(total - count)) {
        return accumulated;
      }

      return append(value)(accumulated);
    })(fresh(orderedEnumerable))(orderedEnumerable);
  };
}
