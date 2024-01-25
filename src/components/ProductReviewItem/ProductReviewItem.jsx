const ProductReviewItem = ({ review }) => {
  const ratingArr = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= review.rating) ratingArr.push(true);
      else ratingArr.push(false);
  }

  return (
    <div className="reviews__item">
      <div className="reviews__item-left-column element-tablet">
        <img className="reviews__item-left-column-avatar" src={review.author.photo} alt={review.name} />
      </div>
      <div className="reviews__item-right-column">
        <div className="reviews__item-top">
          <div className="reviews__item-top-left element-mobile">
            <img className="reviews__item-avatar" src={review.author.photo} alt={review.author.name} />
          </div>
          <div className="reviews__item-top-right">
            <div className="reviews__item-title">{review.author.name}</div>
            <div className="reviews__item-stars">
              {ratingArr.map((item, index) => {
                if (item) return <img src="img/star-yellow.svg" alt="star" key={index} />;
                  else return <img src="img/star-gray.svg" alt="star" key={index} />;
              })}
            </div>
          </div>
        </div>

        <div className="reviews__item-exp">
          <span className="bold">Опыт использования:</span> {review.experienceOfUsage}
        </div>

        <div className="reviews__item-prons">
          <div><span className="bold">Достоинства:</span></div>
          <div>
            {review.advantages}
          </div>
        </div>

        <div className="reviews__item-cons">
          <div><span className="bold">Недостатки:</span></div>
          <div>
            {review.disadvantages}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviewItem;