import styled from 'styled-components';
import { theme } from '../../../../config/index';

export const Icon = styled.svg<{ hasNotif?: boolean }>`
  width: ${(props): string => (props.hasNotif ? '37px' : '31px')};
  height: ${(props): string => (props.hasNotif ? '35px' : '25px')};
  fill: none;
  @media ${theme.breakpoints.mobile} {
    width: 30px;
    height: 24px;
  }
`;
