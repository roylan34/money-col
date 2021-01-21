import styled, { CSSProp, css } from 'styled-components';
import { theme } from '../../../config/index';
import { paperClip, bluePaperClip } from '../../../assets/icons';

const AttachFileThemes: { [key: string]: { [key: string]: CSSProp } } = {
  basicInfo: {
    container: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
    `,
    fileNameContainer: css`
      width: 100%;
      border: thin solid #666666;
      margin-right: 11px;
      height: 54px;
      overflow: hidden;
      @media ${theme.breakpoints.mobile} {
        height: 44px;
      }
    `,
    sizeLabel: css`
      display: none;
    `,
    buttonContainer: css`
      @media ${theme.breakpoints.mobile} {
        height: 44px;
        width: 44px;
      }
    `,
  },
  askInstructor: {
    fileNameContainer: css`
      border: thin solid ${theme.colors.blue.light};
      width: 90%;
      max-width: 470px;
      height: 48px;
      margin-right: 26px;
      @media ${theme.breakpoints.tablet} {
        max-width: 455px;
        margin-right: 0;
      }
      @media ${theme.breakpoints.mobile} {
        /* width: 35%; */
        margin-right: 0;
        max-width: 75%;
      }
    `,
    sizeLabel: css`
      display: block;
      position: absolute;
      top: 49px;
      right: 0;
      @media ${theme.breakpoints.mobile} {
        top: 41px;
      }
    `,
    buttonContainer: ``,
  },
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media ${theme.breakpoints.tablet} {
    justify-content: space-between;
  }
  @media ${theme.breakpoints.mobile} {
    justify-content: space-between;
    width: 90vw;
  }
`;

export const ButtonContainer = styled.label.attrs((props: object) => ({
  ...props,
}))`
  height: 48px;
  width: 48px;
  border-radius: 2px;
  background: ${theme.colors.blue.primary} url(${paperClip}) no-repeat center;
  border: 2px solid ${theme.colors.blue.primary};
  ${(props): CSSProp => AttachFileThemes[props.theme].buttonContainer}

  &:hover {
    height: 48px;
    width: 48px;
    border-radius: 2px;
    background: ${theme.colors.white} url(${bluePaperClip}) no-repeat center;
    border: 2px solid ${theme.colors.blue.primary};
  }

  &:active {
    height: 48px;
    width: 48px;
    border-radius: 2px;
    background: ${theme.colors.white} url(${bluePaperClip}) no-repeat center;
    border: 2px solid ${theme.colors.blue.primary};
  }
`;

export const AttachFileInput = styled.input.attrs((props: object) => ({
  ...props,
}))`
  display: none;
`;

export const FileNameContainer = styled.div`
  ${(props): CSSProp => AttachFileThemes[props.theme].fileNameContainer}
  border-radius: 2px;
  display: flex;
  align-items: center;
  position: relative;
`;

const fileNameStyle = css`
  ${theme.defaultText};
  font-size: 14px;
  line-height: 16px;
  ${theme.handleTextOverflow}
`;

export const Filename = styled.p`
  ${fileNameStyle}
  margin-left: 18px;
`;

export const Placeholder = styled.p`
  ${fileNameStyle}
  color: #afafaf;
  cursor: default;
  padding: 1rem;
`;

export const SizeLabel = styled.p`
  ${theme.defaultText};
  font-size: 12px;
  line-height: 14px;
  ${(props): CSSProp => AttachFileThemes[props.theme].sizeLabel}
  word-break: break-all;
`;
