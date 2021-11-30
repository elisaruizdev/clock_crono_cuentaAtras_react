import './App.css';
import './components/DigitalClock'
import DigitalClock from './components/DigitalClock';
import CuentaAtras from './components/CuentaAtras';
import Stopwatch from './components/StopWatch';

function App() {
  return (
    <div className="App">
    <h1>Reloj</h1>
    <DigitalClock/>
    <h1>Renovar el DNI en:</h1>
    <CuentaAtras/>
    <h1>Cronómetro</h1>
    <Stopwatch/>
    
    </div>
  );
}

export default App;
