import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Root from './Root';
import createReduxStore from './redux/createReduxStore';

render(
  <Provider store={createReduxStore()}>
    <Root />
  </Provider>,
  document.getElementById('app'),
);
