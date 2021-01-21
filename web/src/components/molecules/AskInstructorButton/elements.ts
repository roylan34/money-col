import styled from 'styled-components';
import { theme } from '../../../config';

export const Button = styled.button`
  all: unset;
  background-color: ${theme.colors.blue.light};
  cursor: pointer;
  height: 236px;
  width: 65px;
  border-radius: 15px 0px 0px 15px;

  @media ${theme.breakpoints.mobile} {
    height: 156px;
    width: 47px;
    border-radius: 15px 0px 0px 15px;
  }
`;

export const Title = styled.p`
  color: ${theme.colors.white};
  /* For Safari */
  -webkit-text-fill-color: ${theme.colors.white};
  font-family: ${theme.fonts.default};
  font-size: 18px;
  line-height: 21px;
  word-break: all;
  margin: 0;
  padding: 0;
  ${theme.defaultBoxSizing}
  background: transparent;

  @media ${theme.breakpoints.mobile} {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
`;

export const IconWrapper = styled.div`
  width: 7.41px;
  height: 12px;
  margin-top: 26px;

  @media ${theme.breakpoints.pc} {
    width: 10px;
    height: 16px;
  }
`;
