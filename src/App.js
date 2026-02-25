import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Games from './components/Games';
import Game1 from './components/games/Game1';
import Oddle from './components/games/Oddle';
import CapitalQuiz from './components/games/CapitalQuiz';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/game1" element={<Game1 />} />
            <Route path="/games/oddle" element={<Oddle />} />
            <Route path="/games/capital-quiz" element={<CapitalQuiz />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
