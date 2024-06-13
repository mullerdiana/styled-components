import tags from "./tags.json";

import * as S from "./style.js";

export const Tags = () => {
  return (
    <S.Container>
      <S.Title>Busque por Tags:</S.Title>
      <S.Div>
        {tags.map((tag) => (
          <S.Tag key={tag.id}>{tag.titulo}</S.Tag>
        ))}
      </S.Div>
    </S.Container>
  );
};
