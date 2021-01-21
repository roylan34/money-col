import React, { PureComponent } from 'react';
import { ItemWrapper, IconWrapper, ItemLabel, activeStyle } from './elements';
import {
  User,
  Teacher,
  Video,
  Project,
  EAProgram,
  Article,
  MailBox,
  Logout,
  PendingPayment,
} from '../Icons';
import words from '../../../constants/words';

const Icons: { [key: string]: React.ReactElement } = {
  users: <User />,
  teachers: <Teacher />,
  videos: <Video />,
  'project-contents': <Project />,
  'ea-programs': <EAProgram />,
  articles: <Article />,
  mailbox: <MailBox />,
  'pending-payments': <PendingPayment />,
  logout: <Logout />,
};

type Props = {
  tab: string;
  logOut: () => void;
  isInstructor?: boolean;
};

type LeftSidebarItems =
  | typeof words.leftSideBarInstructorItems
  | typeof words.leftSideBarAdminItems;

class LeftSideBarItem extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { tab, logOut, isInstructor = false } = this.props;
    const sidebarItems: LeftSidebarItems = isInstructor
      ? words.leftSideBarInstructorItems
      : words.leftSideBarAdminItems;
    const key = tab as keyof LeftSidebarItems;

    const shouldShow = Boolean(sidebarItems[key]);

    return shouldShow ? (
      <ItemWrapper
        exact
        to={words.leftSideBarLinks[key]}
        activeStyle={activeStyle}
        isActive={(match, location) => {
          if (!match) {
            return false;
          }
          if (location.pathname === '/logout') {
            logOut();
          }
          return location.pathname === `/${tab}`;
        }}>
        <IconWrapper>{Icons[key]}</IconWrapper>
        <ItemLabel>{sidebarItems[key]}</ItemLabel>
      </ItemWrapper>
    ) : (
      <React.Fragment />
    );
  };
}

export default LeftSideBarItem;
