import tags from "./tags.json";

import * as S from "./style.js";

export const Tags = ({ setTag }) => {
  return (
    <S.Container>
      <S.Title>Busque por Tags:</S.Title>
      <S.Div>
        {tags.map((tag) => (
          <S.Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</S.Tag>
        ))}
      </S.Div>
    </S.Container>
  );
};
