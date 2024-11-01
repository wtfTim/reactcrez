import React from 'react';

function AnimalCard({ animal, onDetails, onOrder }) {
  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>{animal.description}</p>
      <p className="price">Цена: {animal.price} ₽</p>
      <button onClick={onDetails}>Подробнее</button>
      {animal.quantity > 0 ? (
        <button onClick={onOrder}>В корзину</button>
      ) : (
        <button onClick={onOrder}>Заказать</button>
      )}
    </div>
  );
}

export default AnimalCard;
