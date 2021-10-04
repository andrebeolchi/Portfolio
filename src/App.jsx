import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/index'

function App() {
  return (
    <Router className="App">
        <Home />
    </Router>
  );
}

export default App;
