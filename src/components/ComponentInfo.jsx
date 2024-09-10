
import React from 'react';

const ComponentInfo = ({ name, year, idea }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '5px' }}>
      <h2>{name}</h2>
      <p>Year: {year}</p>
      <p>Idea: {idea}</p>
    </div>
  );
};

export default ComponentInfo;
