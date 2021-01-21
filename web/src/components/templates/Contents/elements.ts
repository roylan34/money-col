import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  height: max-content;
`;

export const ModalContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(34, 34, 34, 0.2);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CanPurchaseModalWrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.white};
  width: 690px;
  max-height: 797px;
  height: 95%;
  @media ${theme.breakpoints.mobile} {
    width: 312px;
    max-height: 816px;
    overflow-y: scroll;
  }
`;

export const ErrorPurchaseModalWrapper = styled.div`
  background-color: ${theme.colors.white};
  width: 442px;
  @media ${theme.breakpoints.mobile} {
    width: 312px;
  }
`;
