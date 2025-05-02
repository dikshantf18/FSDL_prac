import React from 'react';
import WeatherCard from './WeatherCard';

function App() {
  const weatherData = {
    city: "New York",
    temperature: 22,
    description: "Partly cloudy"
  };

  return (
    <div className="App">
      <WeatherCard
        city={weatherData.city}
        temperature={weatherData.temperature}
        description={weatherData.description}
      />
    </div>
  );
}

export default App;
