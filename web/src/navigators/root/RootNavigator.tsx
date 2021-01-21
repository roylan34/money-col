import React, { Component } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import firebase from 'firebase/app';
import { firestore } from '../../firebase';
import { firebaseConfig } from '../../config';
import {
  initializeAuthStateListener,
  initializeConversationListener,
} from '../../utils';
import { paths } from '../../constants/routes/urls';
import selector, { StateFromProps } from './selector';
import { TopNavBarProps } from '../../components/organisms/TopNavBar/types';
import { TopNavBar } from '../../components/organisms/TopNavBar';
import { Wrapper } from './elements';
import * as Action from './actions';
import { DispatchFromProps } from './actions';
import { authRoutes } from '../auth';
import { mainRoutes } from '../main';
import { Conversation } from '../../domain/entities';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import { ErrorBoundary } from '../../components/organisms/ErrorBoundary';
import ScrollToTop from './ScrollToTop';

const Screen = styled.div`
  width: 100vw;
  display: flex;
  min-height: 100vh - 10;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 50px;
`;

export const NotFound = () => (
  <Screen>
    <Text>404</Text>
  </Screen>
);

type Props = {
  isLoggedIn: boolean;
  topNavBarParams: TopNavBarProps;
  userId: string;
  lastLogIn?: string;
  logOut: () => void;
  getUser: (userId: string) => void;
  getUserMessages: (conversationId: string) => void;
  getUserConversationsById: (conversationId: string) => void;
  setUserLastLogIn: (id: string, params: { lastLogIn: Date }) => void;
  claimValidGiveaways: (
    userId: string,
    params: { prevLogInDate: Date; currLogInDate: Date },
  ) => void;

  lastGiveawayClaimDate?: Date;
};

type State = {
  redirectRoute?: string;
};

class RootNavigator extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const pathName = window.location.pathname;

    initializeAuthStateListener(
      this.props.logOut,
      firebaseConfig,
      // @ts-ignore
      firebase,
      this.props.getUser,
      ({
        uid,
      }: {
        uid: string;
        metadata: { creationTime?: string; lastSignInTime?: string };
      }) => {
        const { claimValidGiveaways, lastGiveawayClaimDate } = this.props;

        if (lastGiveawayClaimDate && pathName !== paths.recoverEmail) {
          const prevLogInDate = new Date(lastGiveawayClaimDate);
          claimValidGiveaways(uid, {
            currLogInDate: new Date(),
            prevLogInDate,
          });
        }
        this.props.setUserLastLogIn(uid, { lastLogIn: new Date() });
        initializeConversationListener(
          // @ts-ignore
          firestore,
          this.updateMessages,
          'userId',
          uid,
        );
      },
    );
  }

  componentDidUpdate = (prevProps: Props) => {
    const { setUserLastLogIn, isLoggedIn, userId } = this.props;

    if (prevProps.isLoggedIn !== isLoggedIn && isLoggedIn && userId) {
      setUserLastLogIn(userId, { lastLogIn: new Date() });
    }
  };

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
    const { isLoggedIn } = this.props;
    return (
      <Router>
        <ScrollToTop />
        <Wrapper>
          <TopNavBar
            {...this.props.topNavBarParams}
            isAuthenticated={isLoggedIn}
          />
          <ErrorBoundary>
            <Switch>
              {isLoggedIn ? (
                <Redirect exact from="/" to={paths.home} />
              ) : (
                <Redirect exact from="/" to={paths.login} />
              )}

              {authRoutes.map(({ path, key, component, access }) => (
                <AuthRoute
                  isLoggedIn={isLoggedIn}
                  exact
                  path={path}
                  key={key}
                  component={component}
                  access={access}
                />
              ))}

              {mainRoutes.map(({ path, key, component }) => (
                <PrivateRoute
                  isLoggedIn={isLoggedIn}
                  exact
                  path={path}
                  key={key}
                  component={component}
                />
              ))}

              <Redirect
                exact
                from={paths.logOut}
                to={{ pathname: paths.home, state: { shouldLogout: true } }}
              />

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
