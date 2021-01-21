import styled from 'styled-components';
import { theme } from '../../../config/';

export const Container = styled.div`
  background-color: ${theme.colors.blue.primary};
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-height: 100%;
  ${theme.defaultBoxSizing}
  align-content: center;
`;

export const ButtonWrapper = styled.div`
  align-self: center;
  width: 172px;
  height: 34px;
  border-radius: 20px;
  margin-top: 30px;
`;
