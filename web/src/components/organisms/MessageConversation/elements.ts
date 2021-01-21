import styled from 'styled-components';
import { List } from 'react-virtualized';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  ${theme.defaultBoxSizing};
  @media ${theme.breakpoints.mobileAndTablet} {
    height: 100%;
  }
`;

export const MsgWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

export const ReactVirtualizedList = styled(List)`
  outline: none;
`;
