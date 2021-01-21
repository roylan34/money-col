import React, { PureComponent } from 'react';
import { Container, BrandLogoWrapper } from './elements';
import { BrandLogo } from '../../atoms/Icons';
import { UpdatePasswordForm } from '../../organisms/UpdatePasswordForm';
import { updateDefaultPassValues } from '../../organisms/UpdatePasswordForm/types';

type Props = {
  homeLink: string;
  onSubmit: (values: updateDefaultPassValues) => void;
  updatePasswordError: { [key: string]: string } | {};
};

class UpdateDefaultPassword extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { homeLink, onSubmit, updatePasswordError } = this.props;

    return (
      <Container>
        <BrandLogoWrapper>
          <BrandLogo homeLink={homeLink} />
        </BrandLogoWrapper>
        <UpdatePasswordForm
          onSubmit={onSubmit}
          updatePasswordError={updatePasswordError}
        />
      </Container>
    );
  };
}

export default UpdateDefaultPassword;
