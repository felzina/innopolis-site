import { Link } from 'react-router-dom';
import './HomePage.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

const HomePage = () => {
  return (
    <>
      <Header />

      <Nav />

      <div className="container">
        <h1 className="homePage-title">Главная страница</h1>
        <Link className="homePage-link" to="/product">На страницу товара</Link>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;