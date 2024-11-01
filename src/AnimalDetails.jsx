import React from 'react';
import './App.css';

function AnimalDetails({ animal, onClose }) {
  return (
    <div className="animal-details">
      <h2>{animal.name}</h2>
      <img src={animal.image} alt={animal.name} />
      <p>{animal.description}</p>
      <p>Цена: {animal.price} ₽</p>
      <button onClick={onClose} className="close-button">Закрыть</button>
    </div>
  );
}

export default AnimalDetails;
