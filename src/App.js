import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import About from './components/About'; // Import the new AboutPage component
import Projects from './components/Projects'; // Import the new ProjectsPage component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
