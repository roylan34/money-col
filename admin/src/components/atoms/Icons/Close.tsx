import React, { PureComponent } from 'react';

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  color: '#999999' as string,
};

export default class extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { color } = this.props;

    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...this.props}>
        <path
          d="M14 1.08889L12.9111 0L7 5.91111L1.08888 0L0 1.08889L5.91112 7L0 12.9111L1.08888 14L7 8.08889L12.9111 14L14 12.9111L8.08888 7L14 1.08889Z"
          fill={color}
        />
      </svg>
    );
  };
}
