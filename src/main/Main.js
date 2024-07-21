// import React, { useEffect } from "react";
import "./Main.css";
import gridImg1 from "../img/grid-img-1.png";
import gridImg2 from "../img/grid-img-2.png";
import gridImg3 from "../img/grid-img-3.png";

function Main() {
  return (
    <div>
      <main className="main">
        <div className="main-detail">
          <h1>Adote um Pet</h1>
          <p>Encontre seu companheiro ideal para toda uma vida:</p>
          <button aria-label="Botão Adotar">Adote</button>
        </div>

        <section className="tips">
          <div className="tips-grid">
            <a href="/">
              <figure>
                <img src={gridImg1} alt="" />
              </figure>
              <h3>Dicas para novos adotantes</h3>
              <p>Tudo que você precisa saber para adotar um pet</p>
            </a>
            <a href="/">
              <figure>
                <img src={gridImg2} alt="" />
              </figure>
              <h3>Dicas de saúde para o seu pet</h3>
              <p>Saiba no que ficar de olho para um pet saudável</p>
            </a>
            <a href="/">
              <figure>
                <img src={gridImg3} alt="" />
              </figure>
              <h3>Saiba mais sobre abrigos e ONGs</h3>
              <p>Ajude os principais apoiadores perto de você</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
