import React, { PureComponent } from 'react';
import { UpdateInstructorForm } from '../../organisms/UpdateInstructorForm';
import { BasicInfoFields } from './validation';
import { Container, ContentWrapper } from './elements';

type Props = {
  onPressUpdate: (values: BasicInfoFields) => void;
  lastName: string;
  firstName: string;
  email: string;
  isNotifyEmail: string;
  photoURL?: string;
  notifyRepliesWithEmail?: string;
  isLoading?: boolean;
};

type State = {
  imageSource: string;
  file: File | string | null;
};

class UpdateProfileTemplate extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      imageSource: '',
      file: props.photoURL || null,
    };
  }

  componentDidMount() {
    const { photoURL } = this.props;
    const imageSource = photoURL ? photoURL : '';

    this.setState({ imageSource });
  }

  handleAttachPhoto = (file: File) => {
    if (file) {
      const reader = new window.FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.setState({ imageSource: reader.result as string });
      };
    }
  };

  render = (): React.ReactElement => {
    const { imageSource } = this.state;
    const {
      onPressUpdate,
      firstName,
      lastName,
      email,
      isNotifyEmail,
      isLoading,
    } = this.props;
    return (
      <Container>
        <ContentWrapper>
          <UpdateInstructorForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            imageSource={imageSource}
            isNotifyEmail={isNotifyEmail}
            onPressUpdate={onPressUpdate}
            onAttachFile={this.handleAttachPhoto}
            isLoading={isLoading}
          />
        </ContentWrapper>
      </Container>
    );
  };
}

export default UpdateProfileTemplate;
