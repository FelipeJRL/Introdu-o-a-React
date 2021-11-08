
import './App.css';
import logoDark from "./assets/logo-dark.svg"
import setaBaixo from "./assets/icons/down-arrows.svg"
import fotoPerfil from "./assets/home/image-homepage-profile.jpg"
import logoBranco from "./assets/logo-light.svg"
import git from "./assets/icons/github-light.svg"
import twitter from "./assets/icons/twitter-light.svg"
import linkedin from "./assets/icons/linkedin-light.svg"

function App() {
  return (
    <div className="App">
      <header>
        <img src={logoDark} alt="LOGO" />
        <nav>
          <ul>
            <li className="paginaatual">HOME</li>
            <li> <a>PORTFÓLIO</a></li>
            <li>CONTATO</li>
          </ul>
        </nav>
      </header>


      <section className="container hero">

        <div className="card">
          <h1>Olá, me chamo Alex Spencer e eu amo construir Websites lindos</h1>
          <span className="botaosobre">
            <img className="botaosobre" src={setaBaixo} alt="Setas para baixo" />
            <a className="botaosobre">SOBRE MIM</a>
          </span>
        </div>
      </section>


      <section className="container">
        <div className="sobre">
          <div className="imagemperfil">
            <img className="fotoperfil" src={fotoPerfil} alt="Foto de perfil" />
          </div>
          <div className="sobremim">
            <h1>
              Sobre mim
            </h1>
            <p>
              Sou um desenvolvedor front-end júnior procurando por uma oportunidade. Eu foco em escrever HTML
              acessível, usando práticas modernas de CSS e escrevendo um JavaScript limpo. Quando estou
              escrevendo
              código JavaScript, na maioria das vezes estou usando React, mas posso me adapta para qualquer
              ferramenta se necessário. Moro em Londres, UK, mas também seria feliz trabalhando remotamente e
              tenho experiência em times remotos. Quando não estou codando, poderá me achar fora de casa. Eu
              adoro
              estar próximo a natureza seja para uma caminhada, corrida ou ciclismo. Eu amaria se você desse
              uma
              olhada no meu trabalho.
            </p>
            <a>IR PARA PORTFÓLIO</a>
          </div>
        </div>

      </section>


      <section className="container pergunta">
        <div className="finalzinho">
          <h1>
            Interessados em fazer projetos comigo?
          </h1>
          <a className="contato">CONTATO</a>
        </div>
      </section>


      <footer>
        <div className="footer">
          <div className="primeirobloco">
            <img className="menufooter" src={logoBranco} alt="LOGO branco" />
            <ul className="menufooter">
              <li className="menufooter">HOME</li>
              <li className="menufooter">PORTFÓLIO</li>
              <li className="menufooter">CONTATO</li>
            </ul>
          </div>
          <div className="icons">
            <img src={git} alt="github" />
            <img src={twitter} alt="twitter-light" />
            <img src={linkedin} alt="linkedin-light" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
