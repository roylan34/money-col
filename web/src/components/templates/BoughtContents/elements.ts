import styled from 'styled-components';
import { theme } from '../../../config/index';

export const LoadingContainer = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  flex: 1;
`;

export const Container = styled.div`
  height: max-content;
`;

export const BoughtContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

export const BoughtRow = styled.div<{ isFirst?: boolean }>`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  margin-top: ${(props): string => (props.isFirst ? '60px' : '0')};
  margin-bottom: 30px;
  word-break: break-all;
  @media ${theme.breakpoints.mobileAndTablet} {
    flex-direction: column;
  }
`;

export const PreviewWrapper = styled.div<{ isFirst?: boolean }>`
  width: max-content;
  height: max-content;
  margin-left: ${(props): string => (props.isFirst ? '130px' : '80px')};
  @media ${theme.breakpoints.mobileAndTablet} {
    margin-left: 20px;
  }
`;
