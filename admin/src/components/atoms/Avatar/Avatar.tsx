import React, { PureComponent } from 'react';
import { ProfilePicture, Circle, Initial } from './elements';

type Props = {
  label?: string;
  imageSource?: string;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  isAdmin: false as boolean,
};

class Avatar extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { label, imageSource, isAdmin } = this.props;

    return imageSource ? (
      <ProfilePicture src={imageSource} alt="avatar" />
    ) : (
      <Circle isAdmin={isAdmin}>
        {isAdmin ? null : <Initial>{label}</Initial>}
      </Circle>
    );
  };
}

export default Avatar;
