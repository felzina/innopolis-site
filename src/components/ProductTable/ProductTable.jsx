import './ProductTable.css';

const ProductTable = () => {
  return (
    <section className="product-info-subsection product-info-subsection-table">
      <h4 className="product-info-subtitle">Сравнение моделей</h4>
      <table className="product-table">
        <thead>
          <tr>
            <th>Модель</th>
            <th>Вес</th>
            <th>Высота</th>
            <th>Ширина</th>            
            <th>Толщина</th>
            <th>Чип</th>
            <th>Объём памяти</th>
            <th>Аккумулятор</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Iphone11</td>
            <td>194 грамма</td>
            <td>150.9 мм</td>
            <td>75.7 мм</td>
            <td>8.3 мм</td>
            <td>A13 Bionicchip</td>
            <td>до 128 Гб</td>
            <td>До 17 часов</td>
          </tr>
          <tr>
            <td>Iphone12</td>
            <td>164 грамма</td>
            <td>146.7 мм</td>
            <td>71.5 мм</td>
            <td>7.4 мм</td>
            <td>A14 Bionicchip</td>
            <td>до 256 Гб</td>
            <td>До 19 часов</td>
          </tr>
          <tr>
            <td>Iphone13</td>
            <td>174 грамма</td>
            <td>146.7 мм</td>
            <td>71.5 мм</td>
            <td>7.65 мм</td>
            <td>A15 Bionicchip</td>
            <td>до 512 Гб</td>
            <td>До 19 часов</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ProductTable;