import './App.css';
import "./components/fontsAwesomeIcons"
import {BrowserRouter as Router} from 'react-router-dom'

import Navbar from './components/Navbar/index'
import Cabecalho from './components/cabecalho/Cabecalho'
import Banner from './components/banner/Banner'
import Title from './components/title/Title'

function App() {
  return (
    <Router className="App">
        <Navbar/>
    </Router>
  );
}

export default App;
