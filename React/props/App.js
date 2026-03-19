import './App.css';
import SayMyName from './components/SayMyName'

function App() {

  const nome = "Davi"

  return (
    <div className="App">
      <SayMyName nome="Edilsomar"/>
      <SayMyName nome="Eliana"/>
      <SayMyName nome={nome}/>
    </div>
  );
}

export default App;

// Aprendi a manipular props e chama-las na página pricipal!
// Aprendi a criar variáveis na página principal e chama-las no HTML!
