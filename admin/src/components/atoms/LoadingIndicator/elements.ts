import styled from 'styled-components';
import { LoadingParams } from './types';

export const LoadingComponent = styled.div<LoadingParams>`
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    border: 4px solid ${(props): string => props.spinnerColor};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props): string => props.spinnerColor} transparent
      transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
