import React from 'react';
import ReactDom from 'react-dom';
import { FooBarProvider } from './fooBarContext';
import { Foo } from './foo';
import { Bar } from './bar';

function App() {
  return (
    <FooBarProvider>
      <Foo />
      <Bar />
    </FooBarProvider>
  )
}

ReactDom.render(<App />, document.getElementById('app'));
