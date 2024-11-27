import React from 'react';
import './Home.css';
import PinjaLogo from '../assets/Pinja-logo.webp';

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
      <img src={PinjaLogo} alt="Pinja Logo" className="pinja-logo" />
      </header>
      <main className="home-content">
        <section className="intro">
          <h3>Tervetuloa Pinjan konsulttien hallintaohjelmaan!</h3>
          <p>
            Pinjan konsulttienhallinta auttaa hallinnoimaan asiantuntijoiden
            osaamista ja kokemusta tehokkaasti yhdessä paikassa. Sovellus tarjoaa
            helppokäyttöisen alustan konsulttidatan ylläpitoon, suodattamiseen ja raporttien
            luomiseen sekä tulostamiseen. 
          </p>
        </section>
        <section className="features">
          <div className="feature">
            <h4>Konsulttienhallinta</h4>
            <p>Tuo ja hallitse kaikkien asiantuntijoiden tietoja helposti.</p>
          </div>
          <div className="feature">
            <h4>Suodatus ja raportointi</h4>
            <p>Löydä nopeasti oikeat tiedot suodattimien avulla.</p>
          </div>
          <div className="feature">
            <h4>Yhteensopivuus</h4>
            <p>Mukautuu erilaisiin yritystarpeisiin.</p>
          </div>
        </section>
      </main>
      <footer className="home-footer">
        <p>© 2024 Jani & Niko. Kaikki oikeudet pidätetään.</p>
        <p><a href="https://pinja.com">Tutustu yritykseen</a></p>
      </footer>
    </div>
  );
};

export default Home;
