import React, { PureComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Mail, MobileMail, Call, BrandLogo } from '../../atoms/Icons';
import { ProfileIcon } from '../../molecules/ProfileIcon';
import { HamburgerButton } from '../../atoms/HamburgerButton';
import { HamburgerContent } from '../../molecules/HamburgerContent';
import {
  Container,
  LeftContainer,
  LogoWrapper,
  RightContainer,
  AnchorWrapper,
  Anchor,
  AnchorUnderline,
  IconContainer,
  ProfileWrapper,
  HamburgerWrapper,
  MobileIconContainer,
  MobileIconsContainer,
  Text,
  DropdownContainer,
  NavBarWrapper,
} from './elements';
import { TopNavBarProps } from './types';
import { words } from '../../../constants';
import { paths } from '../../../constants/routes/urls';

type Props = TopNavBarProps & Partial<DefaultProps> & RouteComponentProps;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  isAuthenticated: false as boolean,
};

type State = {
  isHamburgerVisible: boolean;
  pageYOffset: number;
};

class TopNavBar extends PureComponent<
  Props & DefaultProps & RouteComponentProps,
  State
> {
  _window: Window;
  static defaultProps = defaultProps;

  constructor(props: Props & DefaultProps & RouteComponentProps) {
    super(props);

    this.state = {
      isHamburgerVisible: false,
      pageYOffset: 0,
    };

    this._window = window;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ pageYOffset: this._window.pageYOffset });
  };

  onToggleHamburger = () => {
    this.setState(prevState => ({
      isHamburgerVisible: !prevState.isHamburgerVisible,
    }));
  };

  render = (): React.ReactElement => {
    const {
      homeLink,
      links,
      hasNotif,
      profileLabel,
      profileImgSrc,
      name,
      onPressHamburgerItem,
      isAuthenticated,
      history,
    } = this.props;
    const { isHamburgerVisible, pageYOffset } = this.state;

    return (
      <NavBarWrapper pageYOffset={pageYOffset}>
        <Container>
          <LeftContainer>
            <LogoWrapper>
              <BrandLogo homeLink={homeLink} />
            </LogoWrapper>
          </LeftContainer>
          {isAuthenticated && (
            <>
              <RightContainer>
                <AnchorWrapper
                  to={{
                    pathname: links.myPageTopUrl,
                    state: { prevPath: history?.location.pathname },
                  }}>
                  <Anchor>{words.topNavBarLabels.myPageTopUrl}</Anchor>
                  <AnchorUnderline />
                </AnchorWrapper>
                <IconContainer to={paths.mailBox}>
                  <Mail hasNotif={hasNotif} />
                </IconContainer>
                <ProfileWrapper>
                  <ProfileIcon
                    imageSource={profileImgSrc}
                    label={profileLabel}
                  />
                </ProfileWrapper>
              </RightContainer>
              <MobileIconsContainer>
                <MobileIconContainer to="/">
                  <Call />
                </MobileIconContainer>
                <MobileIconContainer to={paths.mailBox}>
                  <MobileMail />
                  <Text>お問合せ</Text>
                </MobileIconContainer>
                <HamburgerWrapper>
                  <HamburgerButton onToggle={this.onToggleHamburger} />
                </HamburgerWrapper>
              </MobileIconsContainer>
            </>
          )}
        </Container>
        {isAuthenticated && (
          <DropdownContainer isVisible={isHamburgerVisible}>
            <HamburgerContent
              onPressHamburgerItem={onPressHamburgerItem}
              label={profileLabel}
              imageSource={profileImgSrc}
              name={name}
            />
          </DropdownContainer>
        )}
      </NavBarWrapper>
    );
  };
}

const TopNavBarWithRouter = withRouter(TopNavBar);
export default TopNavBarWithRouter;
