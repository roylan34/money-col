import React, { PureComponent } from 'react';
import { PublishItemWrapper, PublishItemLabel } from './elements';
import { PublishIcon } from '../../atoms/Icons';
import words from '../../../constants/words';

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  setting: 'public' as 'public' | 'private',
};

class PublishItem extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;
  render = (): React.ReactElement => {
    const { setting } = this.props;
    return (
      <PublishItemWrapper>
        <PublishIcon isPrivate={setting === 'private'} />
        <PublishItemLabel>
          {setting === 'private'
            ? words.publishDropdownValue[0]
            : words.publishDropdownValue[1]}
        </PublishItemLabel>
      </PublishItemWrapper>
    );
  };
}

export default PublishItem;
