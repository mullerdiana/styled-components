import * as S from "./style.js";

export const Rodape = ()=> {
  return (
    <S.Footer>
      <S.ContainerIcon>
        <li>
          <a href="#">
            <img src="/imagens/sociais/facebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/imagens/sociais/twitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/imagens/sociais/instagram.svg" alt="" />
          </a>
        </li>
      </S.ContainerIcon>
      <S.FooterText>Desenvolvido por Alura.</S.FooterText>
    </S.Footer>
  );
}
