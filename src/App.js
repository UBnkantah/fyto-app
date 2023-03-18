import './App.css';
import Home from "./pages/Home"
import Form from './components/Form/Form';

function darkmode() {
  document.body.classList.toggle("darkmode")
}

function App() {
  return (
    <div className="App">
      <div id="dark-mode-toggle" onClick={darkmode}></div>
      <Home />
      <Form />
    </div>
  );
}

export default App;
