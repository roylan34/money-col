import styled from 'styled-components';
import { theme } from '../../../config/index';
import { bigClose, download } from '../../../assets/icons';

export const Container = styled.div<{ isVisible?: boolean }>`
  ${theme.removeMarginAndPadding};
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.black.lighter};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const Header = styled.div`
  background: rgba(0, 0, 0, 0);
`;

export const Image = styled.img`
  width: 66%;
  height: 55%;
  object-fit: contain;
  max-width: 872px;
  max-height: 547px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const CloseCircle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${theme.colors.black.primary} url(${bigClose}) no-repeat center;
  position: fixed;
  top: 28px;
  left: 40px;
  cursor: pointer;
`;

export const DownloadCircle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${theme.colors.black.primary} url(${download}) no-repeat center;
  position: fixed;
  top: 28px;
  left: 117px;
  cursor: pointer;
`;
