import React from 'react';
import { hydrate } from 'react-dom';
import Root from './Root';

hydrate(
  <Root />,
  document.getElementById('app'),
);
