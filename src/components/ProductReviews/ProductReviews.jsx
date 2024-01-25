import './ProductReviews.css';

import ProductReviewItem from '../ProductReviewItem/ProductReviewItem';

const ProductReviews = ({ reviews }) => {
  return (
    <section className="product-info-subsection reviews">
      <div className="reviews__title">
        <h4 className="reviews__title-text">Отзывы</h4>
        <span className="reviews__title-indicator">{ reviews.length }</span>
      </div>

      <div className="reviews__list">
        {reviews.map((item, index) => <ProductReviewItem key={index} review={item} />)}
      </div>
    </section>  
  );
};

export default ProductReviews;