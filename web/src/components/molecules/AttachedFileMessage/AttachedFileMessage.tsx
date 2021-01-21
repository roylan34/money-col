import React, { PureComponent } from 'react';
import {
  Container,
  TableRow,
  MsgWrapper,
  DownloadCircle,
  FileContainer,
  AttachedFileCircle,
  NameContainer,
  FileName,
  FileSize,
  ImageWrapper,
  SeenWrapper,
  SeenLabel,
} from './elements';
import { words } from '../../../constants';

type Props = {
  fileUrl: string;
  fileName: string;
  fileSizeInKB: number;
  onClickImage?: () => void;
  dateSent: string;
  onDownloadFile?: () => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'own' as 'own' | 'others',
  isImage: false as boolean,
  isRead: false as boolean,
};

class AttachedFileMessage extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const {
      theme,
      fileName,
      fileSizeInKB,
      fileUrl,
      isImage,
      onClickImage,
      isRead,
      dateSent,
      onDownloadFile,
    } = this.props;

    return (
      <Container theme={theme}>
        <tbody>
          <TableRow theme={theme}>
            <td>
              <MsgWrapper theme={theme}>
                <DownloadCircle onClick={onDownloadFile} />
                {isImage ? (
                  <ImageWrapper
                    src={fileUrl}
                    alt={fileName}
                    theme={theme}
                    onClick={onClickImage}
                  />
                ) : (
                  <>
                    <FileContainer theme={theme}>
                      <AttachedFileCircle onClick={onClickImage} />
                      <NameContainer>
                        <FileName>{fileName}</FileName>
                        <FileSize>{`${fileSizeInKB}KB`}</FileSize>
                      </NameContainer>
                    </FileContainer>
                  </>
                )}
              </MsgWrapper>
            </td>
            <td>
              <SeenWrapper theme={theme}>
                <SeenLabel>{dateSent.replace(/:\d{2}$/, '')}</SeenLabel>
                {isRead && <SeenLabel>{words.msgSeen}</SeenLabel>}
              </SeenWrapper>
            </td>
          </TableRow>
        </tbody>
      </Container>
    );
  };
}

export default AttachedFileMessage;
