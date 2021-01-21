import React, { PureComponent } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { paths } from '../../constants/routes/urls';

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
            //@ts-ignore
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: paths.login, state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}
