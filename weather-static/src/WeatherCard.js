import React from 'react';

function WeatherCard({ city, temperature, description }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '20px',
      width: '300px',
      textAlign: 'center',
      margin: '50px auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h2>{city}</h2>
      <h3>{temperature}°C</h3>
      <p>{description}</p>
    </div>
  );
}

export default WeatherCard;
