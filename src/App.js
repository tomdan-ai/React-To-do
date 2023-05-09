import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import { BrowserRouter as Router } from "react-router-dom"


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
