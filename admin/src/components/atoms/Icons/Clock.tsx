import React, { PureComponent } from 'react';

type State = {};

type Props = {
  [key: string]: string | number;
};

export default class extends PureComponent<Props, State> {
  render = (): React.ReactElement => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...this.props}>
        <path
          d="M0.25 12C0.25 5.53807 5.53807 0.25 12 0.25C18.4619 0.25 23.75 5.53807 23.75 12C23.75 18.4619 18.4619 23.75 12 23.75C5.53807 23.75 0.25 18.4619 0.25 12ZM2.41667 12C2.41667 17.2714 6.7286 21.5833 12 21.5833C17.2714 21.5833 21.5833 17.2714 21.5833 12C21.5833 6.7286 17.2714 2.41667 12 2.41667C6.7286 2.41667 2.41667 6.7286 2.41667 12Z"
          fill="#D4DCE6"
          stroke="#FEFEFE"
          stroke-width="0.5"
        />
        <path
          d="M13.3334 5.33331H10.6667V13.3333H16.0001V10.6666H13.3334V5.33331Z"
          fill="#D4DCE6"
        />
      </svg>
    );
  };
}
