import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  ${theme.defaultBoxSizing}
  width: 62.5vw;
  @media ${theme.breakpoints.pc} {
    max-width: 900px;
  }
  @media ${theme.breakpoints.mobile} {
    width: 90vw;
  }
`;

export const Title = styled.h3`
  ${theme.defaultText}
  padding:  10px 15px;
  font-size: 24px;
  border-bottom: 1px solid #c4c4c4;
`;

export const Description = styled.p`
  ${theme.defaultText}
  ${theme.defaultBoxSizing}
  font-size: 18px;
  width: 100%;
  padding: 10px 15px;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  @media ${theme.breakpoints.mobile} {
    font-size: 16px;
    padding: 2px 5px;
  }
`;
