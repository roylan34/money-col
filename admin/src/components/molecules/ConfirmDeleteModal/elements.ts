import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Cover = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  ${theme.removeMarginAndPadding}
  top: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.2);
  border-radius: inherit;
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  z-index: 6;
`;

export const ConfirmationContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 369px;
  height: 224px;
`;
