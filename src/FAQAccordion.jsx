import React, { useState } from 'react';

function FAQAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-accordion-item">
      <div className="faq-accordion-header" onClick={toggleAccordion}>
        <h3>{question}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="faq-accordion-content">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQAccordion;
