import styled from 'styled-components';
import { ModalParams } from './types';

export const Container = styled.div<ModalParams>`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border-style: none;
  border-radius: inherit;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  display: ${(props): string => (props.isVisible ? 'flex' : 'none')};
`;
