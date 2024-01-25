import { useState } from 'react';
import './ProductMemory.css';

const ProductMemory = ({ memory }) => {
  const [activeMemory, setActiveMemory] = useState(memory[0]);

  return (
    <div className="product-info-subsection">
      <h4 className="product-info-subtitle">Конфигурация памяти: { activeMemory }</h4>
        <div className="product-memory__buttons">
          {memory.map((item, index) => 
            <button 
              key={index} 
              className={(activeMemory === item) ? "product-memory__btn product-memory__btn-active" : "product-memory__btn"}
              onClick={() => { setActiveMemory(item) }}
            >
              { item }
            </button>
          )}
        </div>
    </div>
  );
}

export default ProductMemory;