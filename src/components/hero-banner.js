import React from "react";

export const HeroBanner = () => {
  const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Olá colega</h1>
      <p className="hero-banner__description">
        Este é um site que vai calcular automaticamente a tua nota 
        em cada disciplina e a tua média final do secundário.
      </p>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://auth0.com/developers/hub/code-samples/spa/react-javascript/basic-authentication-with-react-router-6"
        className="button button--secondary"
      >
        Check out the React code sample →
      </a>
    </div>
  );
};
