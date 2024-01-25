import { useState } from 'react';
import ProductColorItem from '../ProductColorItem/ProductColorItem';
import './ProductColors.css';

const ProductColors = ({ colors }) => {
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <div className="product-info-subsection">
      <h4 className="product-info-subtitle">Цвет товара: { activeColor.name }</h4>
      <div className="product-colors">
        {colors.map((item, index) => 
          <ProductColorItem 
            key={index}
            color={item}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
           />
        )}
      </div>
    </div>
  );
};

export default ProductColors;