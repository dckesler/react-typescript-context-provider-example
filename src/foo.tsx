import React from "react";
import { useFoo } from "./useFoo";

export function Foo() {
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
