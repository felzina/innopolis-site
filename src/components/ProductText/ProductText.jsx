import parse from 'html-react-parser';
import './ProductText.css';

const ProductText = ({ text }) => {
  return (
    <div className="product-info-subsection">
      <h4 className="product-info-subtitle">Описание</h4>
      <div className="product-text">
        {parse(text)}
      </div>
    </div>
  );
};

export default ProductText;