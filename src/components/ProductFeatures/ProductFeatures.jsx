import './ProductFeatures.css';

const ProductFeatures = () => {
  return (
    <div className="product-info-subsection">
      <h4 className="product-info-subtitle">Характеристики товара</h4>
      <ul className="product-features">
        <li className="product-features__item">Экран: <b>6.1</b></li>
        <li className="product-features__item">Встроенная память: <b>128 ГБ</b></li>
        <li className="product-features__item">Операционная система: <b>iOS 15</b></li>
        <li className="product-features__item">Беспроводные интерфейсы: <b>NFC, Bluetooth, Wi-Fi</b></li>
        <li className="product-features__item">Процессор: <a target="_blank" href="https://ru.wikipedia.org/wiki/Apple_A15">Apple A15 Bionic</a></li>
        <li className="product-features__item">Вес: 173 г</li>
      </ul>
    </div>
  );
}

export default ProductFeatures;