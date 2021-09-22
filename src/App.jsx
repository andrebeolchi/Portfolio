import './App.css';
import "./components/fontsAwesomeIcons"
import Cabecalho from './components/cabecalho/Cabecalho'
import Banner from './components/banner/Banner'
import Title from './components/title/Title'

function App() {
  return (
    <div className="App">
        <Cabecalho/>
        <Banner/>
        <Title/>
    </div>
  );
}

export default App;
