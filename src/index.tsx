import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from './context';
import { Home } from './pages/home';
import { Generate } from './pages/generate';
import { Train } from './pages/train';

render(
  <Provider>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/generate" exact component={Generate} />
        <Route path="/train" exact component={Train} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);
