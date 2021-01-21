import styled from 'styled-components';
import { List } from 'react-virtualized';
import { theme } from '../../../config';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  ${theme.defaultBoxSizing};
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
