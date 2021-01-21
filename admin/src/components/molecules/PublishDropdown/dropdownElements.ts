import styled from 'styled-components';

export const Container = styled.div<{ isVisible: boolean }>`
  width: 277px;
  height: 112px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 101%;
  z-index: 999;
  display: ${(props): string => (props.isVisible ? 'flex' : 'none')};
  align-items: center;
  background-color: white;
`;

export const RadioButtonsWrapper = styled.div`
  height: 62px;
  margin-left: 21px;
`;
