import { PhotoImage } from "../Gallery/PhotoImage";
import * as S from "./style.js";

export const ModalZoom = ({ photo }) => {
  return (
    <>
      {/* !! transforma objeto em boleano, se for true vira false, se for true vira false */}
      {photo && (
        <S.Overlay>
          <S.Dialog open={!!photo}>
            <PhotoImage photo={photo} isExtended={true} />
            <form method="dialog">
              <button>ok</button>
            </form>
          </S.Dialog>
        </S.Overlay>
      )}
    </>
  );
};
