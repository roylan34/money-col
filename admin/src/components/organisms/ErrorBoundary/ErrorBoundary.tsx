import React, { PureComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Container } from './elements';
import { ErrorPageContent } from '../../molecules/ErrorPageContent';
import { paths } from '../../../constants/routes/urls';
import { words } from '../../../constants';

type Props = {
  children: React.ReactNode;
} & RouteComponentProps;

type State = {
  hasError: boolean;
};

class ErrorBoundary extends PureComponent<Props, State> {
  unlisten: any;

  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleReturnHome = () => {
    this.props.history.push(paths.users);
  };

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    return hasError ? (
      <Container>
        <ErrorPageContent
          title={words.errorBoundaryTitle}
          message={words.errorBoundaryMessage}
          buttonReturnTitle={words.errorBoundaryButton}
          handleReturnHome={this.handleReturnHome}
        />
      </Container>
    ) : (
      children
    );
  }
}

const ErrorBoundaryWithRouter = withRouter(ErrorBoundary);

export default ErrorBoundaryWithRouter;
