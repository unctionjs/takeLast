import lessThan from "@unction/lessthan";
import append from "@unction/append";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import length from "@unction/length";
import fresh from "@unction/fresh";
export default function takeLast (count) {
  return function takeLastCount (orderedList) {
    const total = length(orderedList);


    return reduceWithValueKey((accumulated) => (value) => (index) => {
      if (lessThan(index)(total - count)) {
        return accumulated;
      }

      return append(value)(accumulated);
    })(fresh(orderedList))(orderedList);
  };
}
