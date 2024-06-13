import { Title } from "../../Title";
import photos from "./fotos-populares.json";

import * as S from "./style.js";

export const Populars = () => {
  return (
    <section>
      <Title textAlign="center">Poupulars</Title>

      <S.PhotosColumn>
        {photos.map((photo) => (
          <S.Image key={photo.id} src={photo.path} alt={photo.alt} />
        ))}
      </S.PhotosColumn>
      <S.Button>Ver mais</S.Button>
    </section>
  );
};
