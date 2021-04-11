import React from "react";
import { useRoutes } from "hookrouter";
import Routers from "./routers";
import "./style.css";

const Header = () => {
  return <header> Nagłówek </header>;
};

const Nav = () => {
  return (
    <nav>
      <a href="/">Strona Glowna</a>
      <div />
      <a href="/kontakt">Kontakt</a>
    </nav>
  );
};

const Main = props => {
  const routeResult = useRoutes(Routers);
  return <main>{routeResult} </main>;
};

const Aside = () => {
  return <aside> Marketing </aside>;
};

const Footer = () => {
  return <footer> Stopka </footer>;
};

export default () => {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Aside />
      <Footer />
    </>
  );
};
