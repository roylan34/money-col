import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from '../../../config/index';
import { whiteGreaterThan } from '../../../assets/icons';

export const Dropdown = styled.div`
  width: 204px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  transition: 0.3s;
  position: absolute;
  display: none;
  top: 100%;
  right: -25%;
  border-radius: 5px;
  background-color: #edf1f8;
  z-index: 1;

  @media ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
`;

export const Container = styled.div.attrs((props: object) => ({
  ...props,
}))`
  position: relative;
  width: 51px;

  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    height: 90px;
    cursor: pointer;
    background: ${theme.colors.blue.primary} url(${whiteGreaterThan}) no-repeat
      90%;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media ${theme.breakpoints.pc} {
    &:hover {
      ${Dropdown} {
        display: block;
        box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.25);
      }
    }
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Circle = styled.div<{
  isAdmin: boolean;
  theme: 'default' | 'message';
}>`
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: ${(props): string =>
    props.isAdmin ? theme.colors.blue.primary : theme.colors.gray.primary};
  border-radius: 50%;
  @media ${theme.breakpoints.mobileAndTablet} {
    ${(props): FlattenSimpleInterpolation => {
      if (props.theme === 'default') {
        return css`
          margin-left: 30px;
          margin-right: 20px;
        `;
      } else {
        return css``;
      }
    }}
  }
`;

export const Initial = styled.p`
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  ${theme.defaultText}
`;

export const ProfilePicture = styled.img<{ theme: 'default' | 'message' }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  @media ${theme.breakpoints.mobileAndTablet} {
    ${(props): FlattenSimpleInterpolation => {
      if (props.theme === 'default') {
        return css`
          margin-left: 30px;
          margin-right: 20px;
        `;
      } else {
        return css``;
      }
    }}
  }
`;

export const Name = styled.p`
  ${theme.defaultWhiteText};
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  ${theme.removeMarginAndPadding};
  @media ${theme.breakpoints.pc} {
    display: none;
  }
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
`;
