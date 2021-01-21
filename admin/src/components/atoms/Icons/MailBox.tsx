import React, { PureComponent } from 'react';

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'default' as 'default' | 'instructors',
};

class MailBox extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { theme } = this.props;

    return theme === 'default' ? (
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
          fill="white"
        />
      </svg>
    ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="mail_outline_24px">
            <path
              id="icon/communication/mail_outline_24px"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 17C20 17.55 19.55 18 19 18H5C4.45 18 4 17.55 4 17V8L10.94 12.34C11.59 12.75 12.41 12.75 13.06 12.34L20 8V17ZM4 6L12 11L20 6H4Z"
              fill="#333333"
            />
          </g>
        </svg>
      );
  };
}

export default MailBox;
