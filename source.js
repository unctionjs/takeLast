import lessThan from "@unction/lessthan"
import append from "@unction/append"
import reduceWithValueKey from "@unction/reducewithvaluekey"
import length from "@unction/length"

export default function takeLast (count: number): mixed {
  return function takeLastCount (array: ArrayType): ArrayType {
    const total = length(array)

    return reduceWithValueKey(
      (accumulated: ArrayType): Function =>
        (value: ValueType): Function =>
          (index: number): ArrayType => {
            if (lessThan(index)(total - count)) {
              return accumulated
            }

            return append(value)(accumulated)
          }
    )(
      []
    )(
      array
    )
  }
}
