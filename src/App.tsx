import React from 'react';
import Apod from './components/Apod';
import ApodSection from './components/ApodSection';

function App() {
  return (
    <div className="App">
      <h1>NASA Astronomy Picture of the Day</h1>
      <Apod />
      <ApodSection date="2020-01-12" />
    </div>
  );
}

export default App;
