import React, { useState } from 'react';

function ModalOrder({ onClose }) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Заказ оформлен на номер ${phone} и email ${email}`);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Оформить заказ</h2>
      <form onSubmit={handleSubmit}>
        <label>Телефон:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Отправить</button>
        <button type="button" onClick={onClose}>Отмена</button>
      </form>
    </div>
  );
}

export default ModalOrder;
