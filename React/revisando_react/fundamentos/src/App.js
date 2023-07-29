//styples / CSS
import "./App.css";

//components
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import Render from "./components/Render";

function App() {
  //comentando
  return (
    <div className="App">
      <h1>Fundamentos React </h1>
      {/*comentando*/}
      <h2>Primeiro Componente:</h2>
      <FirstComponent />
      <h2>Template Expression:</h2>
      <TemplateExpressions />
      <h2>Reaproveitando COmponente:</h2>
      <SecondComponent />
      <h2>Eventos:</h2>
      <Events />
      <h2>Renderizando:</h2>
      <Render />
    </div>
  );
}

export default App;
