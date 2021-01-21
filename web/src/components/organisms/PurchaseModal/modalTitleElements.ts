import styled from 'styled-components';
import { theme } from '../../../config/index';

export const TitleContainer = styled.div`
  width: 100%;
`;

export const Separator = styled.div`
  width: 94%;
  height: 1px;
  border-bottom: thin solid ${theme.colors.gray.primary};
  margin: 0 auto;
`;

export const Title = styled.p`
  ${theme.defaultText};
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
  text-align: center;
  @media ${theme.breakpoints.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;
