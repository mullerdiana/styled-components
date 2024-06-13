import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ alignText }) => css`
    color: #7b78e6;
    font-size: 32px;
    text-align: ${alignText ? alignText : "left"};
  `}
`;
