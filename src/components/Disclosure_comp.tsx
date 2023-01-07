import { disclosureDisplay } from './disc_fct';

export function Disc(discHeader: JSX.Element, discPlus: JSX.Element, discID: string, nbOfItems = Number(1), discType?: "discIDBlock", addDiscClass?: string)  {
    return (
        <div className={nbOfItems + " Disclosure " + addDiscClass} id={discType}>
            <div className={"discHeader " + ((nbOfItems === 0) && "noDiscItem")} id={"discHeader " + discID} onClick={() => (nbOfItems !== 0) && disclosureDisplay(discID)}> 
                <div>
                    {discHeader}
                </div>    
                {(nbOfItems !== 0) && <div className="chevron">
                    <svg viewBox="0 0 100 58.353394" /* ratio of the svg file*/ width="12">
                    <use xlinkHref="./genIcons/chevron_down.svg#path2"></use>
                    </svg>
                </div>}
            </div>
            {(nbOfItems !== 0) && <div id="discPlus">{discPlus}</div>}
        </div>
    );
}