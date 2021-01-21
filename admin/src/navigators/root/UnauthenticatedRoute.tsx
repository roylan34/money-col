import React, { PureComponent } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

type Props = {
  isLoggedIn: boolean;
} & RouteProps;

export default class extends PureComponent<Props> {
  render() {
    const { isLoggedIn, component: Component, ...routerProps } = this.props;

    return (
      <Route
        {...routerProps}
        render={props =>
          isLoggedIn ? (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          ) : (
            // @ts-ignore
            <Component {...props} />
          )
        }
      />
    );
  }
}
