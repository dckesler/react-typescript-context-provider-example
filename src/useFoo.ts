import { useCallback, useContext } from 'react';
import { Foo } from './fooBarReducer';
import { FooBarContext } from './fooBarContext';

export function useFoo() {
  // The useContext values are the state and dispatch given to the
  // `value` prop for the `FooBarContext.Provider` in `fooBarContext.tsx`
  const [{ foo }, dispatch] = useContext(FooBarContext);

  const setFoo = useCallback((foo: Foo) => dispatch('setFoo', foo), []);
  const doubleFoo = useCallback(() => dispatch('doubleFoo'), []);
  return {
    foo,
    setFoo,
    doubleFoo,
    // You could also pass `dispatch` through directly. Since we
    // have it typed properly typescript will restrict its uses
    // to the defined Actions union in our reducer file.
  }
}
