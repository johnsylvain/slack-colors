import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const isAuthenticated = () => false;

export const PrivateRoute: React.SFC<RouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      );
    }}
  />
);
