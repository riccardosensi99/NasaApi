import React from 'react';
import Apod from './components/Apod';
import ApodSection from './components/ApodSection';

function App() {
  return (
    <div className="App">
      <Apod />
      <ApodSection date="2002-01-12" />
    </div>
  );
}

export default App;
