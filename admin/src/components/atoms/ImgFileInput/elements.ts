import styled from 'styled-components';
import { smallPlus, whiteClose } from '../../../assets/icons';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 160px;
  height: 90px;
  border: thin dashed #666666;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e1e1e1 url(${smallPlus}) no-repeat center;
  cursor: pointer;
`;

export const SelectedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const OverlayFileInput = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  z-index: 1;
`;

export const RemoveThumbnailWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${theme.colors.blue.primary} url(${whiteClose}) no-repeat center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: -12px;
  left: 148px;
  z-index: 2;
`;
