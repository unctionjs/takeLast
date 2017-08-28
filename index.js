import lessThan from "@unction/lessthan"
import append from "@unction/append"
import reduceWithValueKey from "@unction/reducewithvaluekey"
import length from "@unction/length"
import fresh from "@unction/fresh"

export default function takeLast (count: number): mixed {
  return function takeLastCount (orderedList: ArrayType | string): ArrayType | string {
    const total = length(orderedList)

    return reduceWithValueKey(
      (accumulated: ArrayType | string): Function =>
        (value: ValueType): Function =>
          (index: number): ArrayType | string => {
            if (lessThan(index)(total - count)) {
              return accumulated
            }

            return append(value)(accumulated)
          }
    )(
      fresh(orderedList)
    )(
      orderedList
    )
  }
}
