import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  background-color: #222222;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Video = styled.video`
  :focus {
    outline: none;
  }
  height: 479px;
  @media ${theme.breakpoints.mobile} {
    height: 252px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  svg {
    height: 103px;
    width: 105px;
  }

  @media ${theme.breakpoints.mobile} {
    svg {
      height: 62px;
      width: 63px;
    }
  }
`;
