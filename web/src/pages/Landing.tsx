import React from 'react';
import '../styles/pages/landing.css';
import logoImg from'../images/logo.svg';
import arrowImg from '../images/arrow.svg';
import { Link } from 'react-router-dom';

function Landing(){
   return(
      <div id="page-landing" className="App">
      <div className="content-wrapper">
        <img src={logoImg} alt="logomarca da Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Campina Grande</strong>
          <p>Paraíba</p>
        </div>

        <Link to="/orphanages" className="enter-app">
          <img src={arrowImg} alt="Botão de entrar"/>
        </Link>
        
      </div>
    </div>
   );
}

export default Landing;