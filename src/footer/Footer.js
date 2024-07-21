import "./Footer.css";
import instagram from "../img/icon-instagram.svg";
import logoDesc from "../img/logo-desc.svg";

function Footer() {
  return (
    <div>
      <footer className="Footer">
        <div className="footerTop">
          <a href="/">
            <figure>
              <img src={instagram} alt="Instagram Adopet" />
            </figure>
          </a>
        </div>

        <div className="footerBottom">
          <div className="footerAlign">
            <a href="/">
              <figure>
                <img
                  src={logoDesc}
                  alt="Logo com link para página inicial Adopet"
                />
              </figure>
            </a>

            <div className="footerContent">
              <div className="footerList">
                <h4>Sobre nós</h4>
                <ul>
                  <li>
                    <a href="/">Missão</a>
                  </li>
                  <li>
                    <a href="/">Segurança</a>
                  </li>
                  <li>
                    <a href="/">Doe</a>
                  </li>
                  <li>
                    <a href="/">Parceiros</a>
                  </li>
                  <li>
                    <a href="/">Denuncie</a>
                  </li>
                </ul>
              </div>

              <div className="footerList">
                <h4>Adote</h4>
                <ul>
                  <li>
                    <a href="/">Cães</a>
                  </li>
                  <li>
                    <a href="/">Gatos</a>
                  </li>
                  <li>
                    <a href="/">Outros pets</a>
                  </li>
                </ul>
              </div>

              <div className="footerList">
                <h4>Ajude</h4>
                <ul>
                  <li>
                    <a href="/">ONGs disponíveis</a>
                  </li>
                </ul>
              </div>

              <div className="footerList">
                <h4>Artigos</h4>
                <ul>
                  <li>
                    <a href="/">Adoção consciente</a>
                  </li>
                  <li>
                    <a href="/">Cuidados</a>
                  </li>
                  <li>
                    <a href="/">Dicas</a>
                  </li>
                  <li>
                    <a href="/">Especialistas</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footerDisclaimer">
          <p>AdoPet © Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
