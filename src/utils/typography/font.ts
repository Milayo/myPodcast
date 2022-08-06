import { letterSpacing } from "styled-system";

type BaseFonts = {
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  fontStyle?: string;
  textDecoration?: string;
  textTransform?: string;
  fontFamily?: string;
  mobileSize?: string;
  mobileLineHeight?: string;
  tabSize?: string;
  tabLineHeight?: string;
};

const title = {
  fontWeight: 700,
  fontSize: "9.6rem",
  lineHeight: "100%",
  mobileSize: "7rem",
  tabSize: "8rem",
  letterSpacing: "-4%",
};

const h1 = {
  fontWeight: 700,
  fontSize: "5.93rem",
  lineHeight: "120%",
  letterSpacing: "-2%",
  mobileSize: "3.2rem",
  tabSize: "4.5rem",
};

const h2 = {
  fontWeight: 700,
  fontSize: "3.665rem",
  lineHeight: "100%",
  letterSpacing: "-2%",
  tabSize: "3rem",
  mobileSize: "2.5rem"
};

const h2a = {
  ...h2,
  lineHeight: "140%",
};

const h3 = {
  fontWeight: 500,
  fontSize: "2.265rem",
  lineHeight: "160%",
  letterSpacing: "0%",
  mobileSize: "2rem",
};

const h3b = {
  ...h3,
  fontWeight: 700,
  lineHeight: "140%",
  letterSpacing: "-2%",
};

const bodyText = {
  fontWeight: 500,
  fontSize: "1.6rem",
  lineHeight: "160%",
  letterSpacing: "0%",
  
};

const bodyTextb = {
  ...bodyText,
  fontWeight: 700,
};

const caption = {
  fontWeight: 500,
  fontSize: "1.6rem",
  lineHeight: "160%",
  letterSpacing: "0%",
};

const captionb = {
  ...caption,
  fontWeight: 700,
};

const smallText = {
  fontWeight: 500,
  fontSize: "1.2rem",
  lineHeight: "160%",
  letterSpacing: "0%",
};

const smallTextb = {
  ...smallText,
  fontWeight: 700,
};

let typography: {
  [key: string]: BaseFonts;
} = {};

typography = {
  h1,
  h2,
  h2a,
  h3,
  h3b,
  bodyText,
  bodyTextb,
  caption,
  captionb,
  title,
  smallText,
  smallTextb,
};

export default typography;
