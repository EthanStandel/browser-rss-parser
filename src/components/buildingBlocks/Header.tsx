import { defaultTheme, inverseTheme } from "../../ios/color-scheme-toggle";
import { sidebarDisplayInverted } from '../../components/buildingBlocks/sidebar_fct';

export function Header(leftSPLIcons: Array<string>, middlePart: JSX.Element, rightSPLIcons: Array<string>, Position: string) {

    return (
        <header className={Position}>
            <div id="headerFirstLine">
                <div className="spacingLine" id="largeHeader">       
                    <div className='spacingLineLeft spacingLine noGapSL'>
                    <button title="Afficher/cacher la barre latérale" className="squareButton20" onClick={() => sidebarDisplayInverted()} id="sidebarDisplayInverted">
                        <svg viewBox="0 0 126.80602 100" /* ratio of the svg file*/ height="20">
                        <use xlinkHref="./genIcons/sidebar.svg#path2"></use>
                        </svg>
                    </button>
                    <button title="Informations" className="squareButton20 blockedButton" id="nuntiiInfo">
                        <svg viewBox="0 0 100 100" /* ratio of the svg file*/ height="20">
                        <use xlinkHref="./genIcons/info.svg#path2"></use>
                        </svg>
                    </button>
                    <button title="Filtres & paramètres" className="squareButton20 blockedButton" id="sidebarSettingsFilter">
                        <svg viewBox="0 0 100 100" /* ratio of the svg file*/ height="20">
                        <use xlinkHref="./genIcons/filter.svg#path2"></use>
                        </svg>
                    </button>
                    </div>
                    {middlePart}
                    <div className='spacingLineRight spacingLine noGapSL'>
                    <a title="Envoyer un retour" href="mailto:clement.krajecki@gmail.com?subject=nuntii&body=Bonjour!">
                        <button className="squareButton20" id="sendFeedback">
                        <svg viewBox="0 0 100 94.147377" /* ratio of the svg file*/ height="20">
                            <use xlinkHref="./genIcons/feedback.svg#path2"></use>
                        </svg>
                        </button>
                    </a>
                    <button  title="Fonctionnalités expérimentales" className="squareButton20 blockedButton" id="experimentalFeatures">
                        <svg viewBox="0 0 100 100" /* ratio of the svg file*/ height="20">
                            <use xlinkHref="./genIcons/beaker.svg#path2"></use>
                        </svg>
                        </button>
                    <button title="Inverser le thème" className="squareButton20" onClick={() => inverseTheme()} id={"colorTheme"}>
                        <svg viewBox="0 0 100 100" /* ratio of the svg file*/ height="20">
                        <use xlinkHref={"./genIcons/" + (defaultTheme() === "light" ? "moon" : "sun") + ".svg#path2"}></use>
                        </svg>
                    </button>
                    </div>
                </div>
            </div>
        </header>
    )
};