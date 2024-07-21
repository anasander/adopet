import "./SectionArticles.css";
import bannerCat from "../img/banner-cat.png";
import bannerParakeet from "../img/banner-parakeet.png";
import bannerTouch from "../img/banner-touch.png";

function SectionArticles() {
  return (
    <div>
      <section className="articles">
        <h2>Últimos artigos</h2>
        <div className="articles-list">
          <a href="/">
            <figure>
              <img src={bannerCat} alt="" />
            </figure>
            <h3>Castração: ato de amor</h3>
            <p>
              Saiba sobre o processo de castração e como cuidar do seu bichinho
            </p>
          </a>

          <a href="/">
            <figure>
              <img src={bannerParakeet} alt="" />
            </figure>
            <h3>Adoção: quem pode?</h3>
            <p>Existem pessoas que não podem adotar pets? Saiba neste artigo</p>
          </a>

          <a href="/">
            <figure>
              <img src={bannerTouch} alt="" />
            </figure>
            <h3>Especialista: comportamento</h3>
            <p>
              Problemas comportamentais geram transtornos e precisam de atenção
            </p>
          </a>

          <a href="/" className="articles-more">
            Ver mais artigos
          </a>
        </div>
      </section>
    </div>
  );
}

export default SectionArticles;
