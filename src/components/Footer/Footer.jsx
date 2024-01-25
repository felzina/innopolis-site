import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__text">
          <span className="footer__copyright bold">
            © ООО «<span className="color-orange">Мой</span>Маркет», 2018-2022
          </span>
          <span className="footer__text-part">
            Для уточнения информации звоните по номеру<span className="next-line-mobile"></span> <a href="tel:+79000000000">+7 900 000 0000</a>,
          </span>
          <span className="footer__text-part">
            а предложения по<span className="next-line-mobile"></span> сотрудничеству отправляйте на почту<span className="next-line-mobile"></span> <a href="mailto:partner@mymarket.com">partner@mymarket.com</a>
          </span>
        </div>
        <a className="footer__link" id="to-top-link">Наверх</a>
      </div>
    </footer>
  );
};

export default Footer;