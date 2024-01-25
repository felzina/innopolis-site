import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import './Header.css';
import { useMemo } from 'react';

const Header = ({ id }) => {
  // Отображение индикатора корзины
  const currentCartProducts = useSelector((store) => store.cartSlice.products);

  // Отображение иконки избранного
  const currentFavProducts = useSelector((store) => store.favSlice.products)
  const isIncurrentFavProducts = useMemo(() => {
    currentFavProducts.some((item) => item === id)
  }, [id]);
 
  const favIconClasses = cn({
    'header__icon': true,
    'fav-enlarged-tablet': true,
    'fav-enlarged-tablet-selected': isIncurrentFavProducts,
  });

  return (
    <header className="header" id="header">
      <div className="container header__container">
        <div className="header__description">
          <picture className="header__logo">
            <source media="(min-width: 1024px)" srcSet="img/logo_icon_tablet.svg" />
            <img src="img/logo_icon.svg" alt="Logo" />
          </picture>
          <h1 className="header__title">
            <Link to='/'>
              <span className="color-orange">Мой</span>Маркет
            </Link>
          </h1>
        </div>
        <div className="header__icons">
          <div className={favIconClasses}>
            {currentFavProducts.length > 0 &&
              <div className="header__indicator">{currentFavProducts.length}</div>
            }
          </div>
          <div className="header__cart header__icon">
            <picture>
              <source media="(min-width: 1024px)" srcSet="img/cart_icon_tablet.svg" />
              <img src="img/cart_icon.svg" alt="Корзина" />
            </picture>
            {currentCartProducts.length > 0 && 
              <div className="header__indicator">{ currentCartProducts.length }</div>
            }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;