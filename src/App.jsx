import './App.css';
import "./components/fontsAwesomeIcons"
import Cabecalho from './components/cabecalho/Cabecalho'
import Banner from './components/banner/Banner'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

function App() {
  return (
    <div className="App">
        <Cabecalho/>
        <Banner/>
    </div>
  );
}

export default App;
