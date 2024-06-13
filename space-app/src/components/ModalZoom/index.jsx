import { PhotoImage } from "../Gallery/PhotoImage"

export const ModalZoom = ({photo}) => {
    return (
        <>
        {/* !! transforma objeto em boleano, se for true vira false, se for true vira false */}
            {photo && <dialog open={!!photo}>
                <PhotoImage photo={photo} isExtended={true}/>
                <form method="dialog">
                    <button>ok</button>
                </form>
            </dialog>}
        </>
    )
}
