import React from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

function App() {
  return (
    <div>
      <Navbar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <MainPage />
      </React.Suspense>
    </div>
  );
}

export default App;
