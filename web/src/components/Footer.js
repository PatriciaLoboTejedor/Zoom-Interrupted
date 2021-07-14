import logoFooter from "../images/logo-adalab.png";

function Footer() {
  return (
    <footer className="footer">
      <small className="footer__copy">Awesome profile-cards @2021</small>
      <img
        className="footer__logo"
        src={logoFooter}
        alt="Logo Adalab"
        title="Adalab"
      />
    </footer>
  );
}

export default Footer;
