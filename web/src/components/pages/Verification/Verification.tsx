import React, { PureComponent } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { paths } from '../../../constants/routes/urls';

type Props = RouteComponentProps;

export default class extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      location: { search },
    } = this.props;

    const params = new URLSearchParams(search);
    const mode = params.get('mode');
    const oobCode = params.get('oobCode');

    return !mode || !oobCode ? (
      <div>Error</div>
    ) : (
      <Redirect
        to={{
          pathname: paths[mode],
          state: { oobCode },
        }}
      />
    );
  };
}
