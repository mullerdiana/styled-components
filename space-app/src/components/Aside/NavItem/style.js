import styled, { css } from "styled-components";

export const itemList = styled.li`
  ${({ isActive }) => css`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${(props) => (props.$isActive ? "#7B78E5" : "#D9D9D9")};
    font-family: ${isActive ? "GandhiSansBold" : "GandhiSansRegular"};
    display: flex;
    align-items: center;
    gap: 22px;
  `}
`;
