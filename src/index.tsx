import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Provider from './context';
import Home from './pages/home';

render(
  <Provider>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);
