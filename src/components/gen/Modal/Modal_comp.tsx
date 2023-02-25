import { scrollModalBackground } from "./Modal_fct";
import ReactDOMServer from 'react-dom/server';

export function ModalStructure(modalID: string, modalTitle: string, modalDescription: JSX.Element, modalBottomBarButtons: JSX.Element) {
    
    return (
       <aside id={"Modal" + modalID} className="modal">
            <div className="modalDialog blockwBorder">
                <div className="modalForm">
                    <div className="modalContent" onScroll={() => scrollModalBackground(modalID)}>               
                        <div className="modalHeader">
                            <h4 className="bold" dangerouslySetInnerHTML={{ __html: modalTitle}} />
                        </div>
                        <div className="modalDescription">
                            {modalDescription}
                        </div>
                    </div>
                    {(ReactDOMServer.renderToStaticMarkup(modalBottomBarButtons) !== "<div></div>") ? 
                    <div className="modalBottomBar">
                        {modalBottomBarButtons}
                    </div>
                    : ""
                    }
                    
                </div>
            </div>
        </aside>
    )
}