import styled, { css } from "styled-components";

export const Figure = styled.figure`
  ${({ backgroundImage }) => css`
    background-image: url(${backgroundImage});
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
    color: #ffffff;
  `}
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  max-width: 300px;
  padding: 0 64px;
`;
