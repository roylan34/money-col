import React, { PureComponent } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { paths } from '../../constants/routes/urls';

type Props = {
  isLoggedIn: boolean;
  access: 'public' | 'unauthenticated' | 'authenticated';
} & RouteProps;

export default class AuthRoute extends PureComponent<Props> {
  render() {
    const {
      isLoggedIn,
      component: Component,
      access,
      ...routerProps
    } = this.props;

    return (
      <Route
        {...routerProps}
        render={props =>
          isLoggedIn && access === 'unauthenticated' ? (
            <Redirect
              to={{ pathname: paths.home, state: { from: props.location } }}
            />
          ) : (
            // @ts-ignore
            <Component {...props} />
          )
        }
      />
    );
  }
}
