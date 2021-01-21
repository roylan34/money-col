import styled from 'styled-components';
import { theme } from '../../../config/index';

export const ContainerCard = styled.div`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  transition: 0.3s;
  width: min-content;
  height: auto;
  @media ${theme.breakpoints.mobileAndTablet} {
    box-shadow: none;
  }

  &:hover {
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.25);
    @media ${theme.breakpoints.mobileAndTablet} {
      box-shadow: none;
    }
  }
`;

export const storyStyles = {
  text: {
    padding: 20,
  },
};
