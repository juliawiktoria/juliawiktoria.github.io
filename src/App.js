// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="../public/logo192.png" className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from 'react';
import Header from './components/Header';
// import About from './About';
// import Projects from './Projects';
// import Skills from './Skills';
// import Experience from './Experience';
// import Education from './Education';
// import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      {/* <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact /> */}
    </div>
  );
}

export default App;
