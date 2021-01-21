import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  max-width: 100vw;
  height: 50px;
  padding: 0px 8.3%;
  ${theme.defaultBoxSizing}
  background: #d8dce6;

  @media ${theme.breakpoints.mobileAndTablet} {
    padding: 0px 4.5%;
    height: 60px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      width: 5px;
      height: 10px;

      background-color: transparent;
      cursor: pointer;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      width: 5px;
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      width: 5px;
      background-color: #818b99;
      border: 3px solid transparent;
      background-clip: content-box;
    }
  }
`;

export const ContentTypeButton = styled.button<{ isSelected: boolean }>`
  all: unset;
  cursor: pointer;
  display: inline-block;
  height: 45px;
  min-width: 128px;
  width: fit-content;
  ${({ isSelected }): FlattenSimpleInterpolation | null =>
    isSelected
      ? css`
          border-bottom: 5px solid #033297;
        `
      : null}
  ${theme.defaultText}
  text-align: center;
  margin-right: 40px;
  font-weight: bold;
  font-size: 14px;
`;
