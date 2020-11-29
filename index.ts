import lessThan from "@unction/lessthan";
import append from "@unction/append";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import length from "@unction/length";
import fresh from "@unction/fresh";

export default function takeLast<V> (count: number) {
  return function takeLastCount (orderedEnumerable: Array<V> | string): Array<V> | string {
    const total = length(orderedEnumerable);

    return reduceWithValueKey((accumulated: Array<V> | string) => (value: V) => (index: number): Array<V> | string => {
      if (lessThan(index)(total - count)) {
        return accumulated;
      }

      return append(value)(accumulated);
    })(fresh(orderedEnumerable))(orderedEnumerable);
  };
}
