import styled from 'styled-components';
import { theme } from '../../../config/index';

export const List = styled.nav`
  ul {
    max-height: 123px;
    width: 46.5vw;
    overflow-x: hidden;
    overflow-y: scroll;
    ${theme.removeMarginAndPadding};
    @media ${theme.breakpoints.mobileAndTablet} {
      width: 100vw;
      max-height: 225px;
    }
  }
  margin-bottom: 15px;
`;
