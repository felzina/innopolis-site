import cn from 'classnames';
import { useCallback } from 'react';

const ProductColorItem = ({ color, activeColor, setActiveColor }) => {
  const colorItemClasses = cn({
    'product-colors__item': true,
    'product-colors__item-active': color === activeColor,
  });

  const handleClickColor = useCallback(() => {
    setActiveColor(color)
  }, [color])

  return (
    <div 
      className={colorItemClasses} 
      onClick={handleClickColor}
    >
      <img src={color.src} alt={color.alt} />
    </div>
  );
};

export default ProductColorItem;