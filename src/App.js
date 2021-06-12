import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Logo from './components/Logo';
import Chart from './components/templates/chartjs/Chartjs';
import CountryPicker from './components/templates/countryPicker/countryPicker';

function App() {
  return (
    <div className = "App">
      <div className = "header">
        <Logo />
      </div>
      <div className = "body">
          <Cards />
          <CountryPicker />
          <Chart />
      </div>
    </div>
  );
}

export default App;
