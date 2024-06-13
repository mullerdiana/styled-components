import { ButtonIcon } from "../ButtonIcon/index.jsx";
import { PhotoImage } from "../Gallery/PhotoImage";
import * as S from "./style.js";

export const ModalZoom = ({ photo, OnClose }) => {
  return (
    <>
      {/* !! transforma objeto em boleano, se for true vira false, se for true vira false */}
      {photo && (
        <S.Overlay>
          <S.Dialog open={!!photo} onClose={OnClose}>
            <PhotoImage photo={photo} isExtended={true} />
            <form method="dialog">
              <ButtonIcon formMethod="dialog"><img src="/icons/fechar.png" alt="Icone de fechar" /></ButtonIcon>
            </form>
          </S.Dialog>
        </S.Overlay>
      )}
    </>
  );
};
