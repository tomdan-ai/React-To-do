import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
