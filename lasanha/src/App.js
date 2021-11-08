import logo from './logo.svg';
import './App.css';
import lasanha from "./imagens/lasanha.jpg"

function App() {
  return (
    <div className="App">
      <header>
        <img src={lasanha} alt="Lasanha" />
        <h1>LASANHA À BOLONHESA</h1>
        <p>
          Lasanha a bolonhesa é um clássico que todo mundo ama. O bacana dessa receita é que o molho pode ser feito com antecedência, assim não se perde a manhã inteira do domingão na cozinha!
        </p>
      </header>
      <section>
        <h1 id="ingredientes">INGREDIENTES</h1>
        <ul>
          <li>500 g de patinho moído</li>
          <li>½ xícara (chá) de cebola picada</li>
          <li>⅔ de xícara (chá) de cenoura picada</li>
          <li>⅔ de xícara (chá) de salsão picado</li>
          <li>1 xícara (chá) de leite</li>
          <li>1 xícara (chá) de vinho branco seco</li>
          <li>1 lata de tomate pelado (com o líquido)</li>
          <li>1 colher (sopa) de óleo</li>
          <li>3 colheres (sopa) de manteiga</li>
          <li>noz-moscada ralada na hora a gosto</li>
          <li>sal e pimenta-do-reino moída na hora a gosto</li>
        </ul>
      </section>
      <section>
        <h1>MODO DE PREPARO</h1>
        <ul>
          <li>
            Numa panela média, coloque o óleo, a manteiga e leve ao fogo médio. Quando a manteiga derreter, adicione a cebola e refogue, mexendo sempre, até ficar transparente. Junte a cenoura e o salsão picados, e refogue por 2 minutos, mexendo sem parar.
          </li>
          <li>
            Acrescente a carne moída e misture com um garfo. Tempere com sal e pimenta-do-reino e refogue até que a carne perca a cor rosada.
          </li>
          <li>
            Junte o leite, tempere com noz-moscada ralada na hora a gosto, e mexa até que evapore completamente. Adicione o vinho e deixe cozinhar até secar.
          </li>
          <li>
            Baixe o fogo, junte os tomates pelados (com o líquido da lata) e deixe cozinhar por 3 horas, com a panela tampada, mexendo de vez em quando. O fogo deve estar baixíssimo, caso contrário, o molho irá grudar no fundo da panela. A medida que for secando, adicione um pouquinho de água fervente.
          </li>
        </ul>
      </section>
      <footer>
        Fonte: <a href="https://www.panelinha.com.br/receita/Lasanha-a-bolonhesa">https://www.panelinha.com.br/receita/Lasanha-a-bolonhesa</a>
      </footer>
    </div>
  );
}

export default App;
