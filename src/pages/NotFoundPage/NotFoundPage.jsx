import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

const NotFoundPage = () => {
  return (
    <>
      <Header />

      <Nav />

      <div className="container">
        <h1 className="homePage-title">Ничего не найдено</h1>
      </div>

      <Footer />
    </>
  );
};

export default NotFoundPage;