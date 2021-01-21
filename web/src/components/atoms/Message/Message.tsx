import React, { PureComponent } from 'react';
import {
  Container,
  TableRow,
  MsgWrapper,
  Msg,
  SeenWrapper,
  SeenLabel,
} from './elements';
import { words } from '../../../constants';

type Props = {
  msg: string;
  dateSent: string;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'own' as 'own' | 'others',
  isRead: false as boolean,
};

class Message extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { msg, theme, isRead, dateSent } = this.props;
    return (
      <Container theme={theme}>
        <tbody>
          <TableRow theme={theme}>
            <td>
              <MsgWrapper theme={theme}>
                <Msg>{msg}</Msg>
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

export default Message;
