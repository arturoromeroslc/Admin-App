import React from 'react';
import { hydrate } from 'react-dom';

hydrate(
  <div>
    <h1>hello world</h1>
  </div>,
  document.getElementById('app'),
);
