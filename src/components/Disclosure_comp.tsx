import { disclosureDisplay } from './disc_fct';

export function Disc(discHeader: JSX.Element, discPlus: JSX.Element, discID: string, nbOfItems = Number(1), discType?: "discIDBlock", addDiscClass?: string)  {
    return (
        <div className={nbOfItems + " Disclosure " + addDiscClass} id={discType}>
            <div className={"discHeader spacingLine" + String((nbOfItems === 0) && " noDiscItem").replace('false','')} id={"discHeader " + discID} onClick={() => (nbOfItems !== 0) && disclosureDisplay("discHeader", discID)}> 
                <div>
                    {discHeader}
                </div>    
                {(nbOfItems !== 0) && <div title="Afficher/cacher le bloc" className="chevron">
                    <svg viewBox="0 0 100 58.353394" /* ratio of the svg file*/ width="12">
                        <use xlinkHref="./genIcons/chevron_down.svg#path2"></use>
                    </svg>
                </div>}
            </div>
            {(nbOfItems !== 0) && <div id="discPlus">{discPlus}</div>}
        </div>
    );
}

export function DiscAdditonal(discHeader: JSX.Element, discPlus: JSX.Element, discID: string, nbOfItems = Number(1), addDiscClass?: string)  {
    return (
        <div className={nbOfItems + " Disclosure DisclosureAdditional " + String(addDiscClass).replace('undefined','')}>
            <div className={"discHeader" + String((nbOfItems === 0) && " noDiscItem").replace('false','')} id={"discHeader " + discID}> 
                {(nbOfItems !== 0) && <div className="chevron" onClick={() => (nbOfItems !== 0) && disclosureDisplay("discHeader", discID)}>
                    <svg viewBox="0 0 100 58.353394" /* ratio of the svg file*/ width="12">
                        <use xlinkHref="./genIcons/chevron_down.svg#path2"></use>
                    </svg>
                </div>}
                <div>
                    {discHeader}
                </div>
            </div>
            {(nbOfItems !== 0) && <div id="discPlus">{discPlus}</div>}
        </div>
    );
}