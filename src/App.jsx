import React, { useState } from 'react';
import Header from './Header';
import './App.css';
import AnimalCard from './AnimalCard';
import AnimalDetails from './AnimalDetails';
import ModalOrder from './ModalOrder';
import FAQAccordion from './FAQAccordion';
import { animals } from './data';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const filteredAnimals = animals
    .filter(animal =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'Все' || animal.category === selectedCategory)
    )
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  const faqData = [
    {
      question: "Как сделать заказ?",
      answer: "Чтобы сделать заказ, выберите интересующее животное и нажмите 'В корзину' или 'Заказать', если животное временно недоступно."
    },
    {
      question: "Как осуществляется доставка?",
      answer: "Доставка осуществляется в течение 3-5 рабочих дней. Мы свяжемся с вами для уточнения деталей после оформления заказа."
    },
    {
      question: "Можно ли вернуть животное?",
      answer: "К сожалению, возврат животных не предусмотрен, так как это живые существа. Пожалуйста, обдумайте решение перед покупкой."
    },
    {
      question: "Как ухаживать за питомцем?",
      answer: "Рекомендуем ознакомиться с инструкциями по уходу на нашем сайте или проконсультироваться с нашим специалистом."
    }
  ];

  return (
    <div>
      
      <Header />
      <div className="centr"><input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /></div>
      <div className="centr">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="Все">Все категории</option>
          <option value="Хомяки">Хомяки</option>
          <option value="Морские свинки">Морские свинки</option>
          <option value="Крысы">Крысы</option>
          <option value="Шиншиллы">Шиншиллы</option>
          <option value="Мыши">Мыши</option>
        </select>
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Сортировка по цене ({sortOrder === 'asc' ? 'возрастание' : 'убывание'})
        </button>
      </div>

      <div className="animal-catalog">
        {filteredAnimals.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            onDetails={() => setSelectedAnimal(animal)}
            onOrder={() => setShowModal(true)}
          />
        ))}
      </div>

      {selectedAnimal && (
        <AnimalDetails 
          animal={selectedAnimal} 
          onClose={() => setSelectedAnimal(null)} 
        />
      )}

      {showModal && <ModalOrder onClose={() => setShowModal(false)} />}

      <div className="faq-section">
        <h2>Часто задаваемые вопросы</h2>
        {faqData.map((faq, index) => (
          <FAQAccordion 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
