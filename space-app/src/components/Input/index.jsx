import { styled } from "styled-components";
import search from "./search.png";

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const InputStyled = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;
const IconSearch = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

export const Input = ({ setFilter }) => {
  return (
    <Container>
      <InputStyled 
      onChange={(e) => { setFilter(e.target.value) }} type="text" placeholder="O que você procura?" />
        <IconSearch src={search} alt="ícone de lupa"/>
    </Container>
  );
};
