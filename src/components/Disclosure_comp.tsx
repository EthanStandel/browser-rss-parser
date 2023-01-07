import { disclosureDisplay } from './disc_fct';

export function Disc(discHeader: JSX.Element, discPlus: JSX.Element, discID: string, nbOfItems = Number(1), discType?: "discIDBlock", addDiscClass?: string)  {
    return (
        <div className={String(nbOfItems).replace("0", "discEmpty") + " Disclosure " + addDiscClass} id={discType}>
            <div className="discHeader" id={"discHeader " + discID} onClick={() => disclosureDisplay(discID)}> 
                <div>
                    {discHeader}
                </div>
                <div className="chevron">
                    <svg viewBox="0 0 100 58.353394" /* ratio of the svg file*/ width="12">
                    <use xlinkHref="./genIcons/chevron_down.svg#path2"></use>
                    </svg>
                </div>
            </div>
            <div id="discPlus"> 
                {discPlus}
            </div>
        </div>
    );
}