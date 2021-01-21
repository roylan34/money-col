import React, { PureComponent } from 'react';
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import { paths } from '../../constants/routes/urls';

type Props = {
  isLoggedIn: boolean;
  authorization: 'admin-instructor' | 'admin' | 'instructor';
  isInstructor: boolean;
} & RouteProps;

type ComponentParam =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;
export default class extends PureComponent<Props> {
  render() {
    const {
      isLoggedIn,
      component,
      authorization,
      isInstructor,
      ...routerProps
    } = this.props;
    const Component = component as ComponentParam;

    return (
      <Route
        {...routerProps}
        render={props => {
          if (!isLoggedIn) {
            return (
              <Redirect
                to={{ pathname: paths.login, state: { from: props.location } }}
              />
            );
          }

          if (isInstructor && authorization === 'admin') {
            return (
              <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
              />
            );
          } else {
            return <Component {...props} />;
          }
        }}
      />
    );
  }
}
