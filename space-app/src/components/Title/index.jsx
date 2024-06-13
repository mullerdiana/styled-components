import * as S from "./style.js";
export const Title = ({ textAlign = "left", children }) => {
  return <S.Title alignText={textAlign}>{children}</S.Title>;
};
