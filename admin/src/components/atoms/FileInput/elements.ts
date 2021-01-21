import styled from 'styled-components';
import { theme } from '../../../config/index';
import { paperClip, bluePaperClip } from '../../../assets/icons';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AttachFileInput = styled.input.attrs((props: object) => ({
  ...props,
}))`
  display: none;
`;

export const ButtonContainer = styled.label.attrs((props: object) => ({
  ...props,
}))`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  background: ${theme.colors.blue.primary} url(${paperClip}) no-repeat center;
  border: 2px solid ${theme.colors.blue.primary};

  &:hover {
    @media ${theme.breakpoints.pc} {
      height: 100%;
      width: 100%;
      border-radius: inherit;
      background: ${theme.colors.white} url(${bluePaperClip}) no-repeat center;
      border: 2px solid ${theme.colors.blue.primary};
    }
  }

  &:active {
    height: 100%;
    width: 100%;
    border-radius: inherit;
    background: ${theme.colors.white} url(${bluePaperClip}) no-repeat center;
    border: 2px solid ${theme.colors.blue.primary};
  }
`;
