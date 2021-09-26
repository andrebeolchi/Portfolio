import './App.css';
import "./components/fontsAwesomeIcons"
import {BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/index'

/*
import Navbar from './components/Navbar/index'
import Cabecalho from './components/cabecalho/Cabecalho'
import Banner from './components/banner/Banner'
import Title from './components/title/Title'
import Sidebar from './components/Sidebar';
*/

function App() {
  return (
    <Router className="App">
        <Home />
    </Router>
  );
}

export default App;
