import { Title } from "../Title";
import { Tags } from "./Tags";
import { Populars } from "./Populars/index.jsx";
import { PhotoImage } from "./PhotoImage/index.jsx";
import * as S from "./style.js";

export const Gallery = ({ photos = [], onPhotoSelected }) => {
  return (
    <>
      <Tags />
      <S.Container>
        <S.FluidSection>
          <Title>Navegue pela Galeria</Title>
          <S.ContainerImages>
            {photos.map((photo) => (
              <PhotoImage
                onZoomRequest={onPhotoSelected}
                key={photo.id}
                photo={photo}
              />
            ))}
          </S.ContainerImages>
        </S.FluidSection>
        <Populars />
      </S.Container>
    </>
  );
};
