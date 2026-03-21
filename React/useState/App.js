import './App.css';
import Evento from './components/Evento.js'
import Form from './components/Form.js'

function App() {

  return (
    <div className="App">
      <Evento numero="3"/>
      <Evento numero="7"/>
      <Form />
    </div>
  );
}

export default App;
