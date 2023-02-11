import './App.css';
import AnimatedRoutes from './AnimatedRoutes';
import Navbar from './Navbar';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>  
  );
}

export default App;
