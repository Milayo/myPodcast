import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../../utils/themes/mediaQueries";

export const Button = styled.button<{
  background?: string;
  height?: string;
  width?: string;
  color?: string;
  boxShadow?: string;
}>`
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ color }) => color};
  border-radius: 0.8rem;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: none;
  text-transform: uppercase;
  cursor: pointer;

  ${mediaQueries.phone} {
    /* font-size: 1.4rem;
    width: 20.4rem; */
  }
`;
