import './ProductSidebar.css';

import ProductBuy from '../ProductBuy/ProductBuy';
import ProductAdv from '../ProductAdv/ProductAdv';

const ProductSidebar = ({ product }) => {
  return (
    <aside className="product-offer">
      <ProductBuy 
        id={product.id} 
        price={product.price}
        priceOld={product.priceOld}
        currency={product.currency}
        discount={product.discount}
        deliveryMethods={product.deliveryMethods}
      />

      <ProductAdv />
    </aside>
  );
};

export default ProductSidebar;