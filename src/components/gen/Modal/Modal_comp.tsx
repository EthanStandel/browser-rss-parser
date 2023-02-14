import { ModalDisplay } from "./Modal_fct"
import { sidebarDisplayInverted } from "../../buildingBlocks/sidebar_fct";
import { scrollModalBackground } from "./Modal_fct";

export function ModalStructure(modalID: string) {
    
    return (
       <aside id={"Modal" + modalID} className="modal">
            <div className="modalContainer">
            <div className="modalDialog blockwBorder" onScroll={() => scrollModalBackground(modalID)}>
                <div className='modalToTop'>                
                    <div className="modalHeader">
                        <h4 className="bold">Bienvenue sur <em>nuntii</em>!</h4>
                    </div>
                    <div className="modalContent">
                        <p><em>nuntii</em> vous permet d'accéder aux meilleures sources d'informations dans le monde. <em>nuntii</em> est proposé pour la France mais vous pouvez suivre les actualités par les rédactions internationales. Avant d'accéder à <em>nuntii</em>, choisissez ci-dessous vos paramètres de navigation.</p>
                    </div>
                </div>
                <div className="modalFooter">
                    <button className="largeButtonInverted bold" onClick={() => {ModalDisplay(modalID); sidebarDisplayInverted()}}>
                        <div className='r3 up bold'>Aller à <em>nuntii</em></div>
                    </button>
                </div>
            </div>
            </div>
        </aside>
    )
}