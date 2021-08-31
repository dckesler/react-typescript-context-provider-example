import React, { createContext, useReducer, useCallback } from "react";
import {
  fooBarReducer,
  FooBarState,
  Foo,
  Bar,
  Actions,
  ActionsMap,
} from "./fooBarReducer";

// This is some fancy typing to make the reducer `dispatch` function
// work like so `dispatch(<type>, <payload>)` instead of
// `dispatch({ type: <type>, payload: <payload> })`
export type Dispatcher = <
  Type extends Actions["type"],
  Payload extends ActionsMap[Type]
>(
  type: Type,
  // This line makes it so if there shouldn't be a payload then
  // you only need to call the function with the type, but if
  // there should be a payload then you need the second argument.
  ...payload: Payload extends undefined ? [undefined?] : [Payload]
) => void;

// This is what our FooBarContext will be expecting as its value prop.
type FooBarContextInterface = readonly [FooBarState, Dispatcher];

// A starting Foo object for the reducer/context
const startingFoo: Foo = {
  pityThe() {
    console.log("Been pitied");
  },
  fooAmount: 1,
};

// A starting Bar object for the reducer/context
const startingBar: Bar = {
  walkInto() {
    console.log("Saved you a seat");
  },
  name: "Joe's",
};

export const FooBarContext = createContext<FooBarContextInterface>([
  // Starting values for the context. Really they should never be seen
  // provided the hooks are only used inside children of FooBarProvider.
  { foo: startingFoo, bar: startingBar },
  () => {},
]);

export function FooBarProvider({ children }) {
  const [state, _dispatch] = useReducer(fooBarReducer, {
    foo: startingFoo,
    bar: startingBar,
  });

  // This is my funky idea for a dispatch function that takes two
  // arguments instead of a single object with a type and payload.
  // The rest argument business is so that it can be correctly
  // typed for actions without payloads so they can be called with
  // just the action type, see the above `Dispatcher` type. In this
  // project an example would be `dispatch('doubleFoo')`.
  const dispatch: Dispatcher = useCallback((type, ...payload) => {
    _dispatch({ type, payload: payload[0] } as Actions);
  }, []);
  return (
    <FooBarContext.Provider value={[state, dispatch]}>
      {children}
    </FooBarContext.Provider>
  );
}
