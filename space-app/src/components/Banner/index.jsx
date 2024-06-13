import * as S from "./style.js";

export const Banner = ({ backgroundImage, text }) => {
  return (
    <S.Figure backgroundImage={backgroundImage}>
      <S.Title>
      {text}</S.Title>
    </S.Figure>
  );
};
