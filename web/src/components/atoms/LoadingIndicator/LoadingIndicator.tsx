import React, { PureComponent } from 'react';
import { LoadingComponent } from './elements';
import { theme } from '../../../config';

type Props = {
  spinnerColor?: string;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  spinnerColor: theme.colors.gray.primary,
};

class LoadingIndicator extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { spinnerColor } = this.props;
    return (
      <LoadingComponent spinnerColor={spinnerColor}>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoadingComponent>
    );
  };
}

export default LoadingIndicator;
