import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  width: max-content;
  height: max-content;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OuterCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: thin solid ${theme.colors.blue.lighter};
  margin-right: 20px;
`;

export const InnerCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${theme.colors.blue.lighter};
`;
