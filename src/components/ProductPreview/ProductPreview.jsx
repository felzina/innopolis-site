import './ProductPreview.css';

const ProductPreview = ({ name, images }) => {
  return (
    <section className="product-preview">
        <h2 className="product-preview__title">{ name }</h2>
        <div className="product-preview__images">
          {images.map((item, index) => <img key={index} src={item} alt={name} />)}
        </div>
      </section>
  );
}

export default ProductPreview;