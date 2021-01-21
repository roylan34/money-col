import styled from 'styled-components';
import { plus } from '../../../assets/icons';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: '#ffffff';
  position: relative;
`;

export const Overlay = styled.div`
  width: 100% - 4px;
  height: 100% - 4px;
  border: dashed ${theme.colors.blue.primary} 4px;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

export const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: #e1e1e1 url(${plus}) no-repeat center;
`;

export const Label = styled.div`
  font: 16px ${theme.fonts.default};
  line-height: 16px;
  color: #333333;
  margin-top: 32px;
`;

export const ButtonWrapper = styled.label`
  width: 160px;
  height: 36px;
  border-radius: 2px;
  margin-top: 49px;
  background-color: ${theme.colors.blue.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLabel = styled.span`
  ${theme.defaultWhiteText};
  font-size: 14px;
  line-height: 28px;
`;

export const UploadFileInput = styled.input.attrs((props: object) => ({
  ...props,
}))`
  display: none;
`;
