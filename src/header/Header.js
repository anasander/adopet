import React, { useEffect } from "react";
import "./Header.css";
import Logo from "../img/AdoPet.png";
import News from "../img/news.svg";
import Articles from "../img/folder.svg";
import NearYou from "../img/community.svg";
import Help from "../img/social.svg";
import Warning from "../img/warning.svg";

function Header() {
  useEffect(() => {
    const btnMobile = document.getElementById("btnMobile");

    function toggleMenu(event) {
      if (event.type === "touchstart") event.preventDefault();
      const header = document.querySelector(".header");
      header.classList.toggle("active");

      const active = header.classList.contains("active");
      event.currentTarget.setAttribute("aria-expanded", active);

      if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar menu");
      } else {
        event.currentTarget.setAttribute("aria-label", "Abrir menu");
      }
    }

    if (btnMobile) {
      btnMobile.addEventListener("click", toggleMenu);
      btnMobile.addEventListener("touchstart", toggleMenu);
    }

    return () => {
      if (btnMobile) {
        btnMobile.removeEventListener("click", toggleMenu);
        btnMobile.removeEventListener("touchstart", toggleMenu);
      }
    };
  }, []);

  return (
    <div>
      <header className="header">
        <div className="headerContent">
          <a href="/">
            <figure>
              <img src={Logo} alt="Logo AdoPet" className="headerImg" />
            </figure>
          </a>

          <a className="headerBtn" href="/">
            Adote
          </a>

          <button
            id="btnMobile"
            aria-expanded="false"
            aria-controls="headerNav"
            aria-haspopup="true"
            aria-label="Abrir menu"
          >
            Menu
            <span id="hamburguer"></span>
          </button>
        </div>

        <nav id="headerNav">
          <ul className="headerNavContent" role="menu">
            <li className="navList navBtn">
              <a className="headerNavBtn" href="/">
                Adote
              </a>
            </li>

            <li className="navList">
              <a className="navItem" href="/">
                <span className="navSpan">
                  <img src={News} alt="" />
                </span>
                Sobre Nós
              </a>
            </li>

            <li className="navList">
              <a className="navItem" href="/">
                <span className="navSpan">
                  <img src={Articles} alt="" />
                </span>
                Artigos
              </a>
            </li>

            <li className="navList">
              <a className="navItem" href="/">
                <span className="navSpan">
                  <img src={NearYou} alt="" />
                </span>
                Perto de Você
              </a>
            </li>

            <li className="navList">
              <a className="navItem" href="/">
                <span className="navSpan">
                  <img src={Help} alt="" />
                </span>
                Ajude
              </a>
            </li>

            <li className="navList">
              <a className="navItem" href="/">
                <span className="navSpan">
                  <img src={Warning} alt="" />
                </span>
                Emergência
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
