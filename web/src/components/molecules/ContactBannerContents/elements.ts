import styled from 'styled-components';
import { theme } from '../../../config/index';
import { contactBackground } from '../../../assets/icons';

export const QRContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #78b85a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QRIcon = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${contactBackground}) no-repeat;
  background-size: cover;
`;

export const ContactWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(3, 50, 151, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CallContainer = styled.div`
  width: 57.6%;
  height: 74px;
  background-color: white;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  @media ${theme.breakpoints.mobile} {
    width: 70%;
    margin-top: 25px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const ContactLabel = styled.p`
  font: ${theme.fonts.default};
  color: ${theme.colors.yellow.light};
  font-size: 16px;
  line-height: 21px;
  width: 57.6%;
  word-break: break-all;
  @media ${theme.breakpoints.mobile} {
    width: 70%;
    margin-bottom: 25px;
  }
`;

export const ContactText = styled.p`
  font: ${theme.fonts.default};
  color: ${theme.colors.blue.primary};
  font-size: 1.75rem;
  font-weight: bold;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
`;
