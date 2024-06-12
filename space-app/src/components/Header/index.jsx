import { styled } from "styled-components";
import logo from "/images/logo.png"
import { Input } from "../Input";


const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  img{
    max-width:212px;
  }
`;

export const Header = () => {
 return (<HeaderStyled>
    <img src={logo} />
    <Input/>

  </HeaderStyled>)
};
