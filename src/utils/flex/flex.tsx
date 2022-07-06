import styled from "styled-components";
import { space, layout, LayoutProps, SpaceProps } from "styled-system";

interface FlexProps extends LayoutProps, SpaceProps {
  direction?: string;
  align?: string;
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  flexWrap?: string;
  flex?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ flexWrap }) => flexWrap};

  > * {
    flex: ${({ flex }) => flex};
  }
  ${layout}
  ${space}
`;

export default Flex;
