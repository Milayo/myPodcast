import styled from "styled-components";
import {
  space,
  typography as baseTypography,
  border,
  color as baseColor,
  SpaceProps,
  TypographyProps,
  ColorProps,
  BorderProps,
} from "styled-system";
import { mediaQueries } from "../themes/mediaQueries";
import typography from "./font";

const fontObj: {
  [key: string]: string;
} = {};

Object.keys(typography).forEach((font) => {
  fontObj[font] = font;
});

type Font = typeof fontObj[keyof typeof fontObj];

interface TextProps
  extends SpaceProps,
    TypographyProps,
    ColorProps,
    BorderProps {
  font: Font;
  color?: string;
  breakWords?: boolean;
  align?: "left" | "center" | "right";
  isUnderline?: boolean;
  transform?: string;
}

const Typography = styled.div<TextProps>`
  font-style: ${({ font }) => typography[font]?.fontStyle || "normal"};
  font-size: ${({ font }) => typography[font]?.fontSize};
  font-family: ${({ font }) =>
    typography[font]?.fontFamily || "Montserrat Alternates"};
  font-weight: ${({ font }) => typography[font]?.fontWeight};
  line-height: ${({ font }) => typography[font]?.lineHeight};
  color: ${({ color }) => color};
  letter-spacing: ${({ font }) => typography[font]?.letterSpacing || "inherit"};
  text-align: ${({ align }) => align || "left"};
  text-decoration: ${({ font }) => typography[font]?.textDecoration || "auto"};
  text-transform: ${({ transform }) => transform || "inherit"};
  word-break: ${({ breakWords }) => breakWords && "break-word"};
  ${space}
  ${baseTypography}
  ${border}
  ${baseColor}

  ${mediaQueries.tabport} {
    font-size: ${({ font }) => typography[font]?.tabSize};
    line-height: ${({ font }) => typography[font]?.tabLineHeight};
  }
  ${mediaQueries.phone} {
    font-size: ${({ font }) => typography[font]?.mobileSize};
    line-height: ${({ font }) => typography[font]?.mobileLineHeight};
  }
`;

Typography.defaultProps = {
  color: "textPrimary",
  font: "bodyText",
};

export default Typography;
