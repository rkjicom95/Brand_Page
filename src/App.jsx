import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Location from './components/Location';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
