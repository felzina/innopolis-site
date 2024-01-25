import './ProductPage.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import ProductPreview from "../../components/ProductPreview/ProductPreview";
import ProductColors from "../../components/ProductColors/ProductColors";
import ProductMemory from "../../components/ProductMemory/ProductMemory";
import ProductFeatures from '../../components/ProductFeatures/ProductFeatures';
import ProductText from '../../components/ProductText/ProductText';
import ProductTable from '../../components/ProductTable/ProductTable';
import ProductReviews from '../../components/ProductReviews/ProductReviews';
import ProductAddReview from '../../components/ProductAddReview/ProductAddReview';
import ProductSidebar from '../../components/ProductSidebar/ProductSidebar';

const ProductPage = ({ product }) => {
  return (
    <>
      <Header id={product.id} />

      <Nav />

      <div className="container">
        <ProductPreview name={product.name} images={product.images} />

        <div className="product-columns">
          <main className="product-info">
            <ProductColors colors={product.colors} />

            <ProductMemory memory={product.memory} />

            <ProductFeatures />

            <ProductText text={product.text} />

            <ProductTable />

            <ProductReviews reviews={product.reviews} />

            <ProductAddReview />
          </main>

          <ProductSidebar product={product} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;