import React from 'react';
import App from './App';

function Card({ formData }) {
  return (
    <div className="card">
      <h2>Información ingresada:</h2>
      <p><strong>Nombre:</strong> {formData.input1}</p>
      <p><strong>Color:</strong> {formData.input2}</p>
    </div>
  );
}

export default Card;
