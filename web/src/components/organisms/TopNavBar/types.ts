export type NavBarLinks = {
  myPageTopUrl: string;
};

export type TopNavBarProps = {
  homeLink: string;
  links: NavBarLinks;
  hasNotif: boolean;
  profileLabel?: string;
  profileImgSrc?: string;
  name: string;
  onPressHamburgerItem: (key: string) => void;
};
