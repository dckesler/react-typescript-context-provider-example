import { useCallback, useContext } from 'react';
import { Bar } from './fooBarReducer';
import { FooBarContext } from './fooBarContext';

export function useBar() {
  // The useContext values are the state and dispatch given to the
  // `value` prop for the `FooBarContext.Provider` in `fooBarContext.tsx`
  const [{ bar }, dispatch] = useContext(FooBarContext);

  const setBar = useCallback((bar: Bar) => dispatch('setBar', bar), []);
  const changeBarName = useCallback((name: string) => dispatch('changeBarName', name), []);
  return {
    bar,
    setBar,
    changeBarName,
    // You could also pass `dispatch` through directly. Since we
    // have it typed properly typescript will restrict its uses
    // to the defined Actions union in our reducer file.
  }
}
