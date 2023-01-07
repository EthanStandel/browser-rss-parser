export function liPodcast(
    liPClass: string, 
    liPLink: string, 
    liPIconImg: string, 
    liPTimestamp: string,
    liPIconImg2?: string, 
    liPBgImg?: string,
    liPFirstLine?: string,
    ) {
    return (
        <li className={liPClass}>
            <article>
                <a href={liPLink} target="_blank" rel="noreferrer">
                    <div className="media">
                        <div className="iconContainer">
                            <div className={"iconImgWrapper " + String((liPIconImg2 !== undefined) && "double-img").replace("false","")}>
                                <img 
                                    src={liPIconImg}
                                    alt=""
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src="./icons/WebsitesIcons/applenews.png";
                                    }}
                                />
                                {liPIconImg2 !== undefined ??
                                <img 
                                    src={liPIconImg}
                                    alt=""
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src="./icons/WebsitesIcons/applenews.png";
                                    }}
                                />}
                            </div>
                            <div className="background-image">
                                <img src={liPBgImg}
                                alt={"illustrative image for " + source.name}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src="./genIcons/applenews_bgIMG_alt.jpg";
                                }}
                                /> 
                            </div>
                            </div>
                            <div className="itemContainer">
                                <div className="firstLine">
                                    <div className="r1 up bold articleCategory">
                                        {liPFirstLine}
                                    </div>
                                    <div className="r2 articleDate">
                                    {((liPFirstLine == "") || (liPFirstLine == null)) ? null : String(liPTimestamp)}
                                    </div>
                                </div>
                                <div className="justifiedTitle">
                                    <h6 className="titleLine">
                                    {countryISO3Label == "FRA" ? null : <div className={"LanguageLabel r4 " + countryISO3Label}>{countryISO3Label}</div>}
                                    <div className="ItemTitle" dangerouslySetInnerHTML={{ __html: (item.title?.includes("|") ? _unescape(item.title.split("| ")[1] ?? "") : _unescape(item.title ?? "")).replace('*** BILDplus Inhalt *** ','').replace('[EN LIGNE]', '').replace('<<','«').replace('>>','»').replace(' :','&nbsp;:').replace(' ?','&nbsp;?').replace(' »','&nbsp;»').replace('« ','«&nbsp;').replace(" - " + dateNDaysBefore[0],"")}} />
                                    </h6>
                                    <div className="r2 articleDate">
                                    {((liPFirstLine == "") || (liPFirstLine == null)) ? String(liPTimestamp) : null}
                                    </div>
                                </div>
                                <div className="descriptionLine">
                                    <div className="r2 articleDate">{liPTimestamp}</div>
                                    {item.description && <div className="h8 item-description" dangerouslySetInnerHTML={{ __html: _unescape(item.description).replace('<<','«').replace('>>','»').replace(' :','&nbsp;:').replace(' ?','&nbsp;?').replace(' »','&nbsp;»').replace('« ','«&nbsp;')}} />}
                                </div>
                                <div className="additional-infosLine">
                                    <div className="r4">
                                    {author?.replace(" avec ", ", ").replace(" et ", ", ")}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </article>
        </li>
    );
}