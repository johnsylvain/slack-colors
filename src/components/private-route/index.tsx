import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { Consumer } from '../../context';
import { IContextState } from '../../interfaces';

export const PrivateRoute: React.SFC<RouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Consumer>
    {(state: IContextState) => (
      <Route
        {...rest}
        render={props => {
          return state.trainingData.length > 10 ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          );
        }}
      />
    )}
  </Consumer>
);
