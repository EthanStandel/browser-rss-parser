import { scrollModalBackground } from "./Modal_fct";
import ReactDOMServer from 'react-dom/server';

export function ModalStructure(modalID: string, modalTitle: string, modalDescription: JSX.Element, modalBottomBarButtons: JSX.Element) {
    
    return (
       <aside id={"modal" + modalID} className="modal">
            <div className="modalDialog blockwBorder">
                <div className="modalForm">
                    <div className="modalContent" onScroll={() => scrollModalBackground(modalID)}>               
                        <div className="modalHeader">
                            <div className="spacingLine alwaysCenteredAligned">
                                <div className="spacingLineLeft"></div>
                                <h5 className="bold modalTitle" dangerouslySetInnerHTML={{ __html: modalTitle}} />
                                <div className="spacingLineRight"></div>
                            </div>
                        </div>
                        <div className="modalDescription">
                            <h4 className="bold modalTitle" dangerouslySetInnerHTML={{ __html: modalTitle}} />
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