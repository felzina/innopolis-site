import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../store/slices/cartSlice";
import { addProductToFav, removeProductFromFav } from "../../store/slices/favSlice";
import cn from 'classnames';
import './ProductBuy.css';

const ProductBuy = ({ id, price, priceOld, currency, discount, deliveryMethods }) => {
  const dispatch = useDispatch();
  
  // Отображение кнопки корзины
  const currentCartProducts = useSelector((store) => store.cartSlice.products);
  const isIncurrentCartProducts = currentCartProducts.some((item) => item === id);

  const buyBtnClasses = cn({
    'product-buy__btn': true,
    'product-buy__btn-delete': isIncurrentCartProducts,
  });

  // Отображение иконки избранного
  const currentFavProducts = useSelector((store) => store.favSlice.products)
  const isIncurrentFavProducts = currentFavProducts.some((item) => item === id);

  const favIconClasses = cn({
    'fav': true,
    'fav-selected': isIncurrentFavProducts,
  });

  // Клик по кнопке корзины
  const handleCartButton = () => {
    if (isIncurrentCartProducts) {
      dispatch(removeProductFromCart(id));
    } else {
      dispatch(addProductToCart(id));
    }
  };

  // Клик по иконке избранного
  const handleFavButton = () => {
    if (isIncurrentFavProducts) {
      dispatch(removeProductFromFav(id));
    } else {
      dispatch(addProductToFav(id));
    }
  };

  return (
    <div className="product-buy">
      <div className="product-buy__top">
        <div className="product-buy__old">
          <span className="product-buy__old-price">{ priceOld.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") } { currency }</span>
          <span className="product-buy__old-percent">-{ discount }%</span>
        </div>
        <div className={favIconClasses} onClick={handleFavButton}></div>
      </div>

      <div className="product-buy__new">
      { price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") } { currency }
      </div>

      <div className="product-buy__get">
        {deliveryMethods.map((item, index) =>
          <p key={index}>
            {`${item.name} ${item.date} — `}
            <span className="bold">
              {item.cost > 0 ? `${item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${currency}` : 'бесплатно'}
            </span>
          </p>
        )}
      </div>

      <button 
        className={buyBtnClasses}
        onClick={handleCartButton}
      >
        {isIncurrentCartProducts ? 'Удалить из корзины' : 'Добавить в корзину'}
      </button>
    </div>
  );
}

export default ProductBuy;