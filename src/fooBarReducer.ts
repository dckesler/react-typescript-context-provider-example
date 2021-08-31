export function fooBarReducer(state: FooBarState, action: Actions): FooBarState {
  switch(action.type) {
    // Basic set action for the `fo`o state
    case 'setFoo':
      // A `Foo` specific method not on Bar
      action.payload.pityThe();

    return {
      ...state,
      foo: action.payload,
    };

    // Basic set action for the `bar` state
    case 'setBar':
      // A `Bar` specific method not on Foo
      action.payload.walkInto();

    return {
      ...state,
      bar: action.payload,
    }

    // Action without a payload to alter `foo` state
    case 'doubleFoo':
      return {
      ...state,
      foo: {
        ...state.foo,
        fooAmount: state.foo.fooAmount * 2,
      },
    }

    // Action to alter bar state with a non-`Bar` payload
    case 'changeBarName':
      return {
      ...state,
      bar: {
        ...state.bar,
        name: action.payload,
      }
    }
  }
};

export interface Foo {
  pityThe: () => void;
  fooAmount: number;
}

export interface Bar {
  walkInto: () => void;
  name: string;
}

export type FooBarState = {
  foo: Foo;
  bar: Bar;
}

// Now so we don't have to write out each inidividual action into a Union
// we can use a map and convert that into a Union later. The keys in this
// represent the action types and the values represent the payloads.
export type ActionsMap = {
  setFoo: Foo;
  setBar: Bar;
  doubleFoo: undefined;
  changeBarName: string;
};

// Here's where we form the Actions union from our map. The quick explanation is
// we form a new map with all the possible actions keyed by the action types and
// and then we say we want each of the values at those keys to be an option in
// our Union. So type Actions becomes - 
// { type: 'setFoo', payload: Foo } | { type: 'setBar', payload: Bar } | ...
// Anything you add to the ActionsMap will  become an action option in the 
// Actions Union
export type Actions = {
  [Key in keyof ActionsMap]: {
    type: Key;
    payload: ActionsMap[Key];
  }
}[keyof ActionsMap];
