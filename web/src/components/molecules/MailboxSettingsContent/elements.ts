import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 442px;
  height: 287px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${theme.breakpoints.mobile} {
    width: 100%;
    height: 100%;
  }
`;

export const TitleContainer = styled.div`
  width: 90%;
  height: 63px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.gray.primary};
  justify-self: flex-end;
`;

export const Title = styled.p`
  ${theme.defaultText};
  font-size: 18px;
  line-height: 21px;
`;

export const Done = styled.span`
  position: absolute;
  top: 35%;
  right: 5px;
  font: 18px ${theme.fonts.default};
  line-height: 18px;
  color: ${theme.colors.blue.light};
  cursor: pointer;
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 25%;
  right: 10px;
`;
