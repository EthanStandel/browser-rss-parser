export const Footer = () =>  {
  return (
    <footer> 
    <div className="footer-container">
      <section className="footer-header-app">
        <h1 className="logo-text">nuntium</h1>
        <p className="h7">
          Une application pour faire un tour des actualités locales, nationales et internationales avec des articles de rédactions françaises, francophones et étrangères. 
        </p>
        <p className="h7">
          Chaque sujet est traité en profondeur par les rédactions spécialisées pour une information de qualité. Les balados et autres émissions sont disponibles pour suivre l'actualité du globe à toute heure du jour et de la nuit.
        </p>
      </section>
      <section className="footer-legal">
        <div className="websiteInfo">
          <p className="footnote inline">© 2021-{new Date().toLocaleDateString([], {year:'numeric'})} — France.</p>
          <p className="footnote inline">Créé par <a className="color" href="https://www.reddit.com/user/iKL3W" target="_blank" rel="noreferrer">u/iKL3W</a>, avec <a className="color" href="https://www.reddit.com/user/besthelloworld" target="_blank" rel="noreferrer">u/besthelloworld</a>.</p>
          <p className="footnote inline"><em>nuntium</em> n'est affilié ni à <a href="https://www.apple.com" target="_blank" rel="noreferrer">Apple</a>, ni à une quelconque rédaction.</p>
        </div>
        <nav className="mini-links footnote bold">
          <a href="mailto:clement.krajecki@gmail.com?subject=nuntium&body=Bonjour!">Contact</a>
          <a href="https://github.com/EthanStandel/browser-rss-parser" target="_blank" rel="noreferrer">Github</a>
          <a href="http://atlasflux.saynete.net" target="_blank" rel="noreferrer">Atlas des flux</a>
          <a href="https://www.iptc.org/std/NewsCodes/treeview/mediatopic/mediatopic-fr.html" target="_blank" rel="noreferrer">NewsCodes</a>
          <a href="https://fr.reactjs.org/" target="_blank" rel="noreferrer">React</a>
        </nav>
      </section>
    </div>
  </footer>
  );
}

export default Footer;