import React from "react";
import { useFoo } from "./useFoo";

export function Foo() {
  // Pulling values and methods from the useFoo hook which correspond to the
  // FooBarProvider's useReducer state that's being used in `index.tsx`.
  const { foo, setFoo, doubleFoo } = useFoo();
  return (
    <div>
      <p>Amount of Foo: {foo.fooAmount}</p>
      <button onClick={doubleFoo}>Double the Foo</button>
      <button
        onClick={() =>
          setFoo({
            fooAmount: 1,
            pityThe() {
              console.log("Been reset");
            },
          })
        }
      >
        Reset Foo
      </button>
    </div>
  );
}
