export const Footer = () =>  {
  return (
    <footer> 
    <div className="footer-container">
      <section className="fHeader">
        <div className="footerTitleLine">
          <h1 className="logo-text">nuntii</h1>
          <svg className="BetaBadge" viewBox="0 0 52 22" /* ratio of the svg file*/ height="28">
            <use xlinkHref="./genIcons/betaIcon.svg#path2"></use>
          </svg>
        </div>
        <p className="h8">
          <em>nuntii</em> est un agrégateur de nouvelles convivial qui rassemble des articles et des balados provenant de diverses sources, tous triés par thème et catégorie. En utilisant des flux RSS, <em>nuntii</em> vous apporte les dernières nouvelles et mises à jour de sources fiables françaises, européennes et mondiales sur une plateforme unique et facile à naviguer, économisant ainsi du temps et des efforts aux utilisateurs qui n'ont pas besoin de visiter plusieurs sites web. 
        </p>
        <p className="h8">
          Que vous souhaitiez rester informé sur les événements courants, votre compétition sportive préférée ou que vous cherchiez simplement une manière plus efficace de consommer des nouvelles et des balados, <em>nuntii</em> est la solution parfaite.
        </p>
      </section>
      <section className="footer-legal">
        <ul className="websiteInfo footnote inline">
          <li className="footnote inline">© 2021–{new Date().toLocaleDateString([], {year:'numeric'})} — France.</li>
          <li className="footnote inline">Créé par <a className="color" href="https://www.reddit.com/user/iKL3W" target="_blank" rel="noreferrer">u/iKL3W</a>, avec <a className="color" href="https://www.reddit.com/user/besthelloworld" target="_blank" rel="noreferrer">u/besthelloworld</a>.</li>
          <li className="footnote inline"><em>nuntii</em> n'est affilié ni à <a href="https://www.apple.com" target="_blank" rel="noreferrer">Apple</a>, ni à une quelconque rédaction.</li>
          <li className="footnote inline">Les images et contenus sont soumis au droit d'auteur.</li>
        </ul>
        
        <div className="spacingLine">
          <nav className="mini-links c1 bold">
            <a href="https://github.com/EthanStandel/browser-rss-parser" target="_blank" rel="noreferrer">Github</a>
            <a href="http://atlasflux.saynete.net" target="_blank" rel="noreferrer">Atlas des flux</a>
            <a href="https://www.iptc.org/std/NewsCodes/treeview/mediatopic/mediatopic-fr.html" target="_blank" rel="noreferrer">NewsCodes</a>
            <a href="https://fr.reactjs.org/" target="_blank" rel="noreferrer">React</a>
            <a href="https://heroicons.com/" target="_blank" rel="noreferrer">Heroicons</a>
            <a href="https://chat.openai.com/chat" target="_blank" rel="noreferrer">ChatGPT</a>
          </nav>
        </div>
      </section>
    </div>
  </footer>
  );
}

export default Footer;