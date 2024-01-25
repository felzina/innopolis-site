import { Routes, Route } from 'react-router-dom';
import { product } from '../../mocks/product';
import './App.css';

import HomePage from '../../pages/HomePage/HomePage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='product' element={<ProductPage product={product} />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
