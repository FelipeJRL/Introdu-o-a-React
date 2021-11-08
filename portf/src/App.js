import logo from './logo.svg';
import './App.css';
import logoDark from "./assets/logo-dark.svg"
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
            <li> <a>HOME</a></li>
            <li class="paginaatual">PORTFÓLIO</li>
            <li>CONTATO</li>
          </ul>
        </nav>
      </header>

      <section class="container">
        <div class="manage">

        </div>
        <div class="texto">
          <h1>
            Manage
          </h1>
          <p>
            Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS
            Grid e JavaScript para as áreas interativas, como o slider de testimoniais.
          </p>
          <a class="BOTAO">VER PROJETO</a>
        </div>
      </section>

      <section class="container r">
        <div class="bookmark">

        </div>
        <div class="texto">
          <h1>
            Bookmark
          </h1>
          <p>
            Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS
            Grid e JavaScript para as áreas interativas, como a área de Features.
          </p>
          <a class="BOTAO">VER PROJETO</a>
        </div>
      </section>

      <section class="container r">
        <div class="insurance">

        </div>
        <div class="texto">
          <h1>
            Insure
          </h1>
          <p>
            Este foi um projeto pequeno que consistiu em HTML e CSS principalmente. Eu construí uma landing page
            totalmente responsiva. O único JavaScript que usei foi para o menu de navegação mobile.
          </p>
          <a class="BOTAO">VER PROJETO</a>
        </div>
      </section>

      <section class="container r">
        <div class="fylo">

        </div>
        <div class="texto">
          <h1>
            Fylo
          </h1>
          <p>
            Este projeto foi puramente HTML e CSS. Eu recebi designs mobile e desktop para construir, então ele foi
            totalmente responsivo. Eu tomei um caminho mobile-first e usei CSS moderno como Flexbox e Grid para
            criar o layout.
          </p>
          <a class="BOTAO">VER PROJETO</a>
        </div>
      </section>

      <section class="pergunta">
        <div class="finalzinho">
          <h1>
            Interessados em fazer projetos comigo?
          </h1>
          <a class="BOTAO">CONTATO</a>
        </div>
      </section>


      <footer>
        <div class="footer">
          <div class="primeirobloco">
            <img class="menufooter" src={logoBranco} alt="LOGO branco" />
            <ul class="menufooter">
              <li class="menufooter">HOME</li>
              <li class="menufooter">PORTFÓLIO</li>
              <li class="menufooter">CONTATO</li>
            </ul>
          </div>
          <div class="icons">
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
