import { Title } from "../Title";
import { PhotoImage } from "./PhotoImage/index.jsx";
import { Populars } from "./Populars/index.jsx";
import { Tags } from "./Tags";
import * as S from "./style.js";

export const Gallery = ({ photos = [] }) => {
  return (
    <>
      <Tags />
      <S.Container>
        <S.FluidSection>
          <Title>Navegue pela Galeria</Title>
          <S.ContainerImages>
            {photos.map((photo) => (
              <PhotoImage key={photo.id} photo={photo} />
            ))}
          </S.ContainerImages>
        </S.FluidSection>
        <Populars />
      </S.Container>
    </>
  );
};
