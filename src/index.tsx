import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PrivateRoute } from './components/private-route';
import { Provider } from './context';

import { Home } from './pages/home';
import { Generate } from './pages/generate';
import { Train } from './pages/train';

import { theme } from './theme';

render(
  <ThemeProvider theme={theme}>
    <Provider>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/generate" exact component={Generate} />
          <Route path="/train" exact component={Train} />
        </div>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.querySelector('#app')
);
