import styled, { CSSProp, css } from 'styled-components';
import { theme } from '../../../config';

const borderStyle = 'thin solid #afafaf';

export const Container = styled.div`
  min-height: 1031px;
  width: 79vw;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  border: ${borderStyle};

  @media ${theme.breakpoints.mobile} {
    width: 100vw;
    align-self: center;
    flex-direction: column;
    border: none;
    min-height: 500px;
  }
`;

export const FormContainer = styled.div`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 50px;

  @media ${theme.breakpoints.pc} {
    flex: 1;
  }
  @media ${theme.breakpoints.tablet} {
    flex: 1;
  }
  @media ${theme.breakpoints.mobile} {
    width: 88vw;
    align-self: center;
    padding-bottom: 10px;
    border: ${borderStyle};
    height: fit-content;
  }
`;

export const TitleContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${borderStyle};

  @media ${theme.breakpoints.mobile} {
    height: 60px;
  }
`;

export const Title = styled.h2`
  ${theme.defaultText}
  color: #222222;
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  text-align: center;

  @media ${theme.breakpoints.mobile} {
    font-size: 18px;
  }
`;

export const UserSettingNav = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: ${borderStyle};
  padding-top: 40px;

  @media ${theme.breakpoints.tablet} {
    width: 25%;
  }
  @media ${theme.breakpoints.mobile} {
    padding-top: 24px;
    width: 100%;
    height: 308px;
    padding-bottom: 30px;
  }
`;

export const Avatar = styled.div`
  background-color: #afafaf;
  height: 120px;
  width: 120px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
`;

export const AvatarInitials = styled.p`
  ${theme.defaultText}
  font-weight: bold;
  font-size: 16px;
`;

export const AvatarLabel = styled.p`
  ${theme.defaultText}
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

type SelectSettingsButtonStyleProps = {
  hasBottomBorder: boolean;
  isActive: boolean;
};

export const SelectSettingsButton = styled.button`
  all: unset;
  border-top: ${borderStyle};
  ${(props: SelectSettingsButtonStyleProps): CSSProp | null =>
    props.hasBottomBorder
      ? css`
          border-bottom: ${borderStyle};
        `
      : null}
  width: 78%;
  height: 51px;
  ${theme.defaultText}
  font-size: 14px;
  color: #222222;
  cursor: pointer;

  @media ${theme.breakpoints.mobile} {
    width: 100%;
    font-size: 16px;
    padding-left: 7vw;
    ${(props: SelectSettingsButtonStyleProps): CSSProp | null =>
      props.isActive
        ? css`
            background-color: #b3c2e0;
          `
        : null}
  }

  &:hover {
    background-color: #b3c2e0;
  }
`;
