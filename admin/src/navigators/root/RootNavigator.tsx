import React, { Component } from 'react';
import * as firebase from 'firebase';
import { firestore } from '../../firebase';
import { connect, RootStateOrAny } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import { paths } from '../../constants/routes/urls';
import selector, { StateFromProps } from './selector';
import * as Action from './actions';
import { DispatchFromProps } from './actions';
import { authRoutes } from '../auth';
import { mainRoutes } from '../main';
import PrivateRoute from './PrivateRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import { Wrapper } from './elements';
import { LeftSidebar } from '../../components/molecules/LeftSidebar';
import { initializeConversationListener } from '../../utils';
import { Conversation } from '../../domain/entities';
import { ErrorBoundary } from '../../components/organisms/ErrorBoundary';

const Screen = styled.div`
  width: 100%;
  height: auto;
  bottom: 0px;
  top: 0px;
  left: 0;
  position: absolute;
  z-index: -1;
`;

const Text = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  top: 50%;
  left: 50%;
  margin-left: -50px; /* margin is -0.5 * dimension */
  margin-top: -25px;
`;

const NotFound = () => (
  <Screen>
    <Text>404</Text>
  </Screen>
);

type Props = {
  isLoggedIn: boolean;
  resetToken: (token: string) => void;
  resetAuthenticated: (isAuthenticated: boolean) => void;
  logOut: () => void;
  setInstructorLastLogIn: (id: string, params: { lastLogIn: Date }) => void;
  signOutErrors: { [key: string]: string } | {};
  isInstructor: boolean;
  getUserConversationsById: (conversationId: string) => void;
  getUserMessages: (conversationId: string) => void;
  userId: string;
};

class RootNavigator extends Component<Props> {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(async (user: firebase.User | null) => {
      const {
        isInstructor,
        resetToken,
        resetAuthenticated,
        setInstructorLastLogIn,
        isLoggedIn,
      } = this.props;
      if (user && isLoggedIn) {
        const token = await user.getIdToken(true);
        resetToken(token);
        resetAuthenticated(true);
        if (isInstructor) {
          setInstructorLastLogIn(user.uid, { lastLogIn: new Date() });
          initializeConversationListener(
            // @ts-ignore
            firestore,
            this.updateMessages,
            'instructorId',
            user.uid,
          );
        }
      } else {
        resetToken('');
        resetAuthenticated(false);
        // TODO: Logout User
      }
    });
  }

  updateMessages = (conversations: Conversation[]) => {
    const { getUserConversationsById, getUserMessages, userId } = this.props;
    conversations.forEach(convo => {
      getUserConversationsById(convo.id);
      // TO DO: only call getUserMessages for conversation ids which are focused
      if (convo.previewMessageData.recipientId === userId) {
        getUserMessages(convo.id);
      }
    });
  };

  render = (): React.ReactElement => {
    const { isInstructor, isLoggedIn, logOut, signOutErrors } = this.props;
    return (
      <Router>
        <Wrapper>
          {isLoggedIn && (
            <LeftSidebar logOut={logOut} isInstructor={isInstructor} />
          )}
          <ErrorBoundary>
            <Switch>
              {isLoggedIn ? (
                <Redirect
                  exact
                  from="/"
                  to={isInstructor ? paths.home : paths.users}
                />
              ) : (
                <Redirect exact from="/" to={paths.login} />
              )}
              {!isLoggedIn && Object.keys(signOutErrors).length < 1 && (
                <Redirect exact from="/logout" to={paths.login} />
              )}

              {authRoutes.map(({ path, key, component }) => (
                <UnauthenticatedRoute
                  isLoggedIn={isLoggedIn}
                  exact
                  path={path}
                  key={key}
                  component={component}
                />
              ))}

              {mainRoutes.map(({ path, key, component, authorization }) => (
                <PrivateRoute
                  isLoggedIn={isLoggedIn}
                  exact
                  path={path}
                  key={key}
                  component={component}
                  authorization={authorization}
                  isInstructor={isInstructor}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </ErrorBoundary>
        </Wrapper>
      </Router>
    );
  };
}

const mapStateToProps = (state: RootStateOrAny): StateFromProps => {
  return selector(state);
};

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
): DispatchFromProps => {
  return bindActionCreators(Action, dispatch);
};

export default connect<StateFromProps, DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps,
)(RootNavigator);
