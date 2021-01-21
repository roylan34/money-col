import React, { PureComponent } from 'react';
import { Circle, Initial, ProfilePicture } from './elements';

type Props = {
  label?: string;
  imageSource?: string;
  children?: React.ReactNode;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'default' as 'default' | 'message',
  isAdmin: false as boolean,
};

export default class Avatar extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { label, imageSource, children, theme, isAdmin } = this.props;

    return imageSource ? (
      <React.Fragment>
        <ProfilePicture theme={theme} src={imageSource} alt="avatar" />
        {children}
      </React.Fragment>
    ) : (
      <Circle isAdmin={isAdmin} theme={theme}>
        {isAdmin ? null : (
          <>
            <Initial>{label}</Initial>
            <>{children}</>
          </>
        )}
      </Circle>
    );
  };
}
