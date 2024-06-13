import * as S from "./style.js";
import { ButtonIcon } from "../../ButtonIcon/index.jsx";

export const PhotoImage = ({
  photo,
  isExtended = false,
  onZoomRequest,
  toggleFavorite,
}) => {
  const iconFavorite = photo.favorite
    ? "/icons/favorito-ativo.png"
    : "/icons/favorito.png";
  return (
    <S.Figure isExtended={isExtended}>
      <img src={photo.path} alt={photo.alt} />
      <figcaption>
        <h3>{photo.titulo}</h3>
        <S.Footer>
          <h4>{photo.fonte}</h4>
          <ButtonIcon onClick={() => toggleFavorite(photo)}>
            <img src={iconFavorite} alt="Icone de favorito" />
          </ButtonIcon>
          {!isExtended && (
            <ButtonIcon
              aria-hidden={isExtended}
              onClick={() => onZoomRequest(photo)}
            >
              <img src="/icons/expandir.png" alt="Icone de expandir" />
            </ButtonIcon>
          )}
        </S.Footer>
      </figcaption>
    </S.Figure>
  );
};
